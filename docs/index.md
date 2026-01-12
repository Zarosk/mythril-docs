---
slug: /
sidebar_position: 1
title: Welcome to Mythril
---

# Welcome to Mythril

**Mythril** is a Discord bot that orchestrates Claude Code execution. Run AI coding sessions from your phone, monitor progress in real-time, and approve changes when ready.

Self-hosted. Open source. Free forever.

## What Mythril Does

```
/mythril start
    ↓
claude --dangerously-skip-permissions -p "task prompt"
    ↓
Output streams to Discord thread
    ↓
/mythril approve
```

You control Claude Code from Discord. The AI runs on your machine, in your codebase.

## Key Features

### Claude Code Orchestration
Trigger Claude Code execution from any device with Discord. No SSH, no terminal access needed.

### Real-time Streaming
Watch Claude Code's output in Discord as it happens. See what files it's creating, what changes it's making.

### Task Management
Queue tasks in your Obsidian vault. Pick, execute, approve, or reject from Discord.

### Brain/Memory
Persistent notes and context that follow you across sessions. Add context with `/mythril brain`.

### BYOK (Bring Your Own Key)
Use your own Anthropic API key. Your key, your data, your control.

## Quick Start

```bash
git clone https://github.com/Zarosk/mythril-bot
cd mythril-bot
cp .env.example .env
# Edit .env with your tokens
npm install
npm run dev:all
```

**Prerequisites:**
- Node.js 18+
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed
- Obsidian (for task management)
- Discord Bot Token
- Anthropic API Key

Ready to set up? Head to the [Installation Guide](/getting-started/installation).

## Links

- [GitHub](https://github.com/Zarosk/mythril-bot)
- [Discord Community](https://discord.gg/kkbTmW8QF2)
