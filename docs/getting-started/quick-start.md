---
sidebar_position: 1
title: Quick Start
---

# Quick Start

Get Mythril running in 10 minutes.

## Prerequisites

You need these installed first:

| Requirement | Why |
|-------------|-----|
| Node.js 18+ | Runtime |
| [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) | The AI that does the work |
| Obsidian | Task management |
| Discord account | Control interface |

## Step 1: Clone and Configure

```bash
git clone https://github.com/Zarosk/mythril-bot
cd mythril-bot
cp .env.example .env
```

Edit `.env`:

```bash
# Required
DISCORD_BOT_TOKEN=your_discord_bot_token
ANTHROPIC_API_KEY=sk-ant-your-key

# Discord Channel IDs
DISCORD_GUILD_ID=your_server_id
DISCORD_COMMANDS_CHANNEL_ID=channel_for_commands
DISCORD_STATUS_CHANNEL_ID=channel_for_status

# Paths
OBSIDIAN_VAULT_PATH=/path/to/your/vault
CODE_PROJECTS_PATH=/path/to/your/code
```

## Step 2: Set Up Obsidian Vault

Create the task management structure:

```
your-vault/
└── _orchestra/
    ├── queue/       # Put task files here
    ├── completed/   # Done tasks go here
    └── blocked/     # Rejected tasks go here
```

## Step 3: Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create New Application → name it "Mythril"
3. Go to Bot → Create Bot
4. Copy the token → paste in `.env` as `DISCORD_BOT_TOKEN`
5. Enable these Intents:
   - Message Content Intent
   - Server Members Intent

## Step 4: Invite Bot to Server

1. Go to OAuth2 → URL Generator
2. Select scopes: `bot`, `applications.commands`
3. Select permissions: `Send Messages`, `Use Slash Commands`, `Embed Links`, `Read Message History`, `Create Public Threads`
4. Copy URL and open in browser
5. Select your server

## Step 5: Start Mythril

```bash
npm install
npm run dev:all
```

This starts both the Discord bot and the Brain API.

## Step 6: Create Your First Task

Create a file in `_orchestra/queue/` called `TASK-001.md`:

```markdown
---
id: TASK-001
title: Hello World
project: test
status: queued
---

## Description
Create a file called hello.txt with "Hello World" inside.

## Acceptance Criteria
- [ ] File created
- [ ] Contains correct text
```

## Step 7: Run It

In Discord:

```
/mythril pick TASK-001
/mythril start
```

Watch Claude Code execute in the thread. When done:

```
/mythril approve
```

## What Just Happened?

1. `/mythril pick` moved your task to `ACTIVE.md`
2. `/mythril start` spawned: `claude --dangerously-skip-permissions -p "..."`
3. Claude Code executed, output streamed to Discord
4. `/mythril approve` moved task to `completed/`

## Next Steps

- [Full Installation Guide](/getting-started/installation) - detailed setup
- [Configuration](/getting-started/configuration) - all environment variables
- [Commands](/commands) - all available commands
