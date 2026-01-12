---
sidebar_position: 2
title: Installation
---

# Installation

Complete setup guide for Mythril.

## Requirements

### Required Software

| Software | Version | Purpose |
|----------|---------|---------|
| Node.js | 18+ | Runtime for bot and API |
| Claude Code CLI | Latest | AI execution engine |
| Obsidian | Any | Task file management |
| Git | Any | Clone the repo |

### Required Accounts

| Account | Get it at |
|---------|-----------|
| Discord Bot Token | [Discord Developer Portal](https://discord.com/developers/applications) |
| Anthropic API Key | [Anthropic Console](https://console.anthropic.com) |

## Install Claude Code

Claude Code must be installed on the same machine running Mythril:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify it works:

```bash
claude --version
```

Configure your API key:

```bash
claude config set api_key sk-ant-your-key
```

## Clone Mythril

```bash
git clone https://github.com/Zarosk/mythril-bot
cd mythril-bot
```

## Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your values. See [Configuration](/getting-started/configuration) for all options.

Minimum required:

```bash
DISCORD_BOT_TOKEN=your_token
DISCORD_GUILD_ID=your_server_id
DISCORD_COMMANDS_CHANNEL_ID=commands_channel
DISCORD_STATUS_CHANNEL_ID=status_channel
OBSIDIAN_VAULT_PATH=/path/to/vault
CODE_PROJECTS_PATH=/path/to/code
ANTHROPIC_API_KEY=sk-ant-your-key
```

## Set Up Obsidian Vault

Create the orchestra directory structure:

```
your-vault/
└── _orchestra/
    ├── queue/       # Queued tasks
    ├── completed/   # Approved tasks
    └── blocked/     # Rejected tasks
    └── ACTIVE.md    # Current task (created automatically)
```

## Create Discord Bot

### 1. Create Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Name it "Mythril" (or whatever you want)

### 2. Create Bot User

1. Go to "Bot" in the left sidebar
2. Click "Add Bot"
3. Copy the token → save to `.env` as `DISCORD_BOT_TOKEN`

### 3. Enable Intents

Under "Privileged Gateway Intents", enable:
- Message Content Intent
- Server Members Intent

### 4. Generate Invite URL

1. Go to "OAuth2" → "URL Generator"
2. Select scopes:
   - `bot`
   - `applications.commands`
3. Select bot permissions:
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Attach Files
   - Read Message History
   - Create Public Threads
   - Send Messages in Threads
   - Add Reactions
4. Copy the generated URL

### 5. Invite to Server

1. Open the URL in your browser
2. Select your Discord server
3. Authorize

## Discord Server Setup

Recommended channel structure:

```
#mythril-commands  - Send commands here
#mythril-status    - Bot posts status updates
#mythril-alerts    - Important notifications
#mythril-chat      - Conversational AI mode (optional)
```

Get each channel's ID (Developer Mode → Right-click → Copy ID) and add to `.env`.

## Install Dependencies

```bash
npm install
```

## Start Mythril

Development mode (with hot reload):

```bash
npm run dev:all
```

Or separately:

```bash
# Terminal 1: Brain API
npm run dev:brain

# Terminal 2: Discord Bot
npm run dev:bot
```

Production mode:

```bash
npm run build
npm start
```

## Verify Installation

In Discord, run:

```
/mythril status
```

You should see the bot respond with current status.

## Troubleshooting

### Bot not responding

1. Check bot is online in Discord member list
2. Verify `DISCORD_COMMANDS_CHANNEL_ID` matches the channel you're in
3. Check console for errors

### Claude Code not found

```bash
which claude  # Should show path
```

If not found, reinstall Claude Code or add to PATH.

### Permission errors

Ensure the bot role is high enough in your server's role hierarchy.

### Slash commands not appearing

Set `REGISTER_SLASH_COMMANDS=true` in `.env` and restart. Commands take up to an hour to propagate globally.
