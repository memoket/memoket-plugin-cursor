#!/usr/bin/env node

import process from "node:process";

const server = "https://mcp.memoket.ai/mcp";
const oauthMetadata = "https://mcp.memoket.ai/.well-known/oauth-protected-resource";
const expectedTools = [
  "get_brief",
  "get_conversations",
  "get_summaries",
  "get_transcripts",
  "get_transcripts_by_participant",
  "list_conversations",
  "search_recordings",
];

function fail(message) {
  console.error(`Live contract check failed: ${message}`);
  process.exit(1);
}

function parseSseJson(body) {
  for (const line of body.split("\n")) {
    if (line.startsWith("data:")) {
      return JSON.parse(line.slice(5).trim());
    }
  }
  return JSON.parse(body);
}

async function post(message, sessionId) {
  const headers = {
    Accept: "application/json, text/event-stream",
    "Content-Type": "application/json",
  };
  if (sessionId) headers["Mcp-Session-Id"] = sessionId;

  const response = await fetch(server, {
    method: "POST",
    headers,
    body: JSON.stringify(message),
  });
  const text = await response.text();
  if (!response.ok) fail(`MCP returned HTTP ${response.status}: ${text.slice(0, 200)}`);
  return {
    data: text ? parseSseJson(text) : null,
    sessionId: response.headers.get("mcp-session-id") || sessionId,
  };
}

const metadataResponse = await fetch(oauthMetadata, {
  headers: { Accept: "application/json" },
});
if (!metadataResponse.ok) fail(`OAuth metadata returned HTTP ${metadataResponse.status}`);
const metadata = await metadataResponse.json();
if (metadata.resource !== server) fail(`unexpected protected resource ${metadata.resource}`);
if (!metadata.authorization_servers?.includes("https://api.memoket.ai")) {
  fail("api.memoket.ai is missing from authorization_servers");
}
if (!metadata.scopes_supported?.includes("mcp:connect")) {
  fail("mcp:connect is missing from scopes_supported");
}

const initialized = await post({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: { name: "memoket-plugin-contract-check", version: "0.1.0" },
  },
});
if (!initialized.data?.result) fail("initialize response has no result");
if (!initialized.sessionId) fail("initialize response has no MCP session id");

await post(
  { jsonrpc: "2.0", method: "notifications/initialized", params: {} },
  initialized.sessionId,
);
const listed = await post(
  { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} },
  initialized.sessionId,
);
const tools = listed.data?.result?.tools;
if (!Array.isArray(tools)) fail("tools/list response has no tools array");

const names = tools.map((tool) => tool.name).sort();
if (JSON.stringify(names) !== JSON.stringify(expectedTools)) {
  fail(`tool names differ: received ${names.join(", ")}`);
}
for (const tool of tools) {
  if (tool.annotations?.readOnlyHint !== true) {
    fail(`${tool.name} is no longer annotated read-only`);
  }
  if (tool.annotations?.destructiveHint !== false) {
    fail(`${tool.name} is no longer annotated non-destructive`);
  }
}

console.log(`Live contract passed: ${tools.length} read-only, non-destructive tools.`);
