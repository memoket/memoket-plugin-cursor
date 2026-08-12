# Contributing

Thank you for helping improve Memoket for Cursor.

Before opening a pull request:

1. Run `node scripts/validate-template.mjs` from the repository root.
   When network access is available, also run `node scripts/check-live-contract.mjs`.
2. Keep `.cursor-plugin/marketplace.json`, the plugin manifest, `mcp.json`, the
   rule, and both README files consistent.
3. Verify tool names and pagination semantics against the live MCP contract when
   changing retrieval guidance.
4. Use synthetic examples. Never commit OAuth tokens or recording-derived data.
5. Preview both README files and confirm every local image and link resolves.

For vulnerabilities or sensitive data exposure, follow [SECURITY.md](SECURITY.md)
instead of opening a public issue.
