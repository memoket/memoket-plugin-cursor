# Memoket — Cursor Plugin

Official [Cursor](https://cursor.com) plugin for [Memoket](https://memoket.ai), the AI voice recorder.

It connects Cursor's agent to your Memoket account over MCP so you can **search your recordings and pull transcripts, summaries, and briefs** of your meetings and conversations — directly inside Cursor.

## Repository layout

```text
.cursor-plugin/
  marketplace.json                 # marketplace manifest (this repo's plugins)
plugins/
  memoket/
    .cursor-plugin/plugin.json     # plugin manifest
    mcp.json                       # registers the Memoket MCP server (remote, OAuth)
    rules/memoket.mdc              # guidance for the agent on when/how to use Memoket
    assets/logo.svg                # marketplace logo
    README.md
scripts/
  validate-template.mjs            # local validator
```

## Validate

```bash
node scripts/validate-template.mjs
```

## Install (before it's on the marketplace)

Add the Memoket MCP server to Cursor directly:

```json
{
  "mcpServers": {
    "memoket": { "url": "https://mcp.memoket.ai/mcp" }
  }
}
```

## License

MIT — see [LICENSE](LICENSE).
