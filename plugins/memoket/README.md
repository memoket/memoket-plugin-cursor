# Memoket for Cursor

Bring your [Memoket](https://memoket.ai) voice recordings into Cursor. This plugin connects Cursor's agent to your Memoket account over MCP, so you can search your recordings and pull transcripts, summaries, and briefs of your meetings and conversations — without leaving the editor.

## What you can do

- 🔎 **Search recordings** by keyword or topic
- 📝 **Get full transcripts** (and transcripts filtered to one speaker)
- 🧠 **Get AI summaries and briefs** of any meeting
- 💬 **Browse conversations** you've recorded

## How it works

The plugin registers Memoket's hosted MCP server (`https://mcp.memoket.ai/mcp`). On first use, Cursor walks you through an OAuth sign-in to Memoket; after that, the agent can call the Memoket tools directly.

## Requirements

- A [Memoket](https://memoket.ai) account with recordings.

## Tools

| Tool | Description |
| --- | --- |
| `search_recordings` | Find recordings by keyword/topic |
| `list_conversations` | List your recorded conversations |
| `get_conversations` | Fetch conversation details |
| `get_transcripts` | Full transcript for a recording |
| `get_transcripts_by_participant` | Transcript filtered to one speaker |
| `get_summaries` | AI summaries for a recording |
| `get_brief` | Short brief / key highlights |

## Support

Questions or issues: kailun.tan@memoket.ai
