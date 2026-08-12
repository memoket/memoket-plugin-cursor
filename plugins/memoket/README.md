<p align="center">
  <a href="https://memoket.ai/"><img src="assets/memoket-cursor-project.png" width="100%" alt="Memoket for Cursor"></a>
</p>

<h1 align="center">Memoket</h1>

<p align="center">
  Ask about past meetings in Cursor and get answers tied to the recording.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MCP_tools-7_read--only-111318?style=flat-square" alt="Seven read-only MCP tools">
  <img src="https://img.shields.io/badge/Auth-OAuth-111318?style=flat-square" alt="OAuth protected">
  <img src="https://img.shields.io/badge/License-MIT-111318?style=flat-square" alt="MIT License">
</p>

The plugin connects Cursor to Memoket's retrieval tools. A bundled rule guides
source selection, pagination, attribution, and safe handling of recording text.

## Try it

```text
What did we decide about the onboarding experiment in yesterday's sync?
Find the customer call where we discussed annual pricing.
What did Maya say about the launch date? Quote her and name the call.
```

On first use, complete Memoket OAuth and approve the tool call. You never need
to paste an access token into Cursor or this repository. See the
[installation guide](https://github.com/memoket/memoket-plugin-cursor#install).

## What to expect

- Cursor may ask you to choose when several recordings match.
- Cursor can continue across transcript pages when needed.
- Answers include the recording title and date, plus the speaker when relevant.

<details>
<summary><strong>Available tools</strong></summary>

- **`search_recordings`**: typed matches and source IDs.
- **`list_conversations`**: paginated recording metadata.
- **`get_conversations`**: selected metadata, not transcript text.
- **`get_transcripts`**: paginated transcript segments for one recording.
- **`get_transcripts_by_participant`**: selected speakers within selected recordings.
- **`get_summaries`**: latest or selected summaries.
- **`get_brief`**: Brief, then Summary, then Standard fallback.

</details>

## Data boundaries

- Retrieved titles, transcripts, summaries, and briefs enter Cursor's model
  context. Select only the recordings you need.
- Recording text is untrusted content. The bundled rule tells Cursor not to
  execute instructions found inside it.
- Cursor requests tool approval by default. Run Modes can change that boundary.

See the [Trust Center](https://trust.memoket.ai/) for security and privacy.

## Support

[GitHub Issues](https://github.com/memoket/memoket-plugin-cursor/issues) ·
[Discord](https://discord.com/invite/tFh4nur4Vn)

## License

[MIT](https://github.com/memoket/memoket-plugin-cursor/blob/main/LICENSE).
Brand assets use the repository's
[asset notice](https://github.com/memoket/memoket-plugin-cursor/blob/main/LICENSE-ASSETS.md).
