---
sidebar_position: 3
title: Configuration
---

# Configuration

All configuration is via environment variables in `.env`.

## Required Variables

### Discord

```bash
# Your Discord bot token
DISCORD_BOT_TOKEN=your_bot_token_here

# Your Discord server ID
DISCORD_GUILD_ID=123456789012345678

# Channel where you send commands
DISCORD_COMMANDS_CHANNEL_ID=123456789012345678

# Channel where bot posts status updates
DISCORD_STATUS_CHANNEL_ID=123456789012345678
```

### Paths

```bash
# Path to your Obsidian vault
OBSIDIAN_VAULT_PATH=/Users/you/Documents/MyVault

# Path to your code projects
CODE_PROJECTS_PATH=/Users/you/code
```

### API Keys

```bash
# Your Anthropic API key
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

## Optional Variables

### Additional Channels

```bash
# Channel for important alerts
DISCORD_ALERTS_CHANNEL_ID=123456789012345678

# Channel for approval decisions
DISCORD_DECISIONS_CHANNEL_ID=123456789012345678

# Channel for conversational AI mode
DISCORD_CHAT_CHANNEL_ID=123456789012345678
```

### Streaming Settings

```bash
# Enable real-time output streaming (default: true)
STREAMING_ENABLED=true

# Buffer flush interval in ms (default: 1500)
STREAM_BUFFER_MS=1500

# Force flush at this many characters (default: 1500)
STREAM_MAX_CHARS=1500
```

### Command Settings

```bash
# Auto-register slash commands on startup (default: true)
REGISTER_SLASH_COMMANDS=true

# Show deprecation warnings for !prefix commands (default: true)
DEPRECATE_PREFIX_COMMANDS=true
```

### Brain API

```bash
# Brain API URL (default: http://localhost:3000)
BRAIN_API_URL=http://localhost:3000

# Brain API key (generated with npm run generate-key)
BRAIN_API_KEY=oads_live_xxxxx
```

### Execution Limits

```bash
# Graceful stop timeout in ms (default: 10000)
GRACEFUL_STOP_TIMEOUT_MS=10000

# Maximum execution time in ms (default: 3600000 = 1 hour)
EXECUTION_TIMEOUT_MS=3600000
```

### Claude Code

```bash
# Path to Claude Code executable (default: claude)
CLAUDE_CODE_PATH=claude
```

## Example .env

```bash
# Discord
DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=123456789012345678
DISCORD_COMMANDS_CHANNEL_ID=123456789012345678
DISCORD_STATUS_CHANNEL_ID=123456789012345678
DISCORD_ALERTS_CHANNEL_ID=123456789012345678
DISCORD_CHAT_CHANNEL_ID=123456789012345678

# Paths
OBSIDIAN_VAULT_PATH=/Users/alex/Documents/Obsidian/MyVault
CODE_PROJECTS_PATH=/Users/alex/code

# API Keys
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxx

# Brain API
BRAIN_API_URL=http://localhost:3000
BRAIN_API_KEY=oads_live_xxxxxxxxxxxx

# Settings
STREAMING_ENABLED=true
REGISTER_SLASH_COMMANDS=true
```

## Getting Channel IDs

1. Enable Developer Mode in Discord:
   - User Settings → App Settings → Advanced → Developer Mode
2. Right-click any channel
3. Click "Copy Channel ID"

## Getting Server ID

1. Enable Developer Mode (see above)
2. Right-click your server name
3. Click "Copy Server ID"

## Security Notes

- Never commit `.env` to git (it's in `.gitignore`)
- Keep your API keys secret
- The `--dangerously-skip-permissions` flag gives Claude Code full access
- Only run Mythril in environments you trust

## Task File Format

Tasks in `_orchestra/queue/` use this format:

```markdown
---
id: TASK-001
title: Build login page
project: my-app
status: queued
---

## Description
Create a login page with email/password fields.

## Acceptance Criteria
- [ ] Email input with validation
- [ ] Password input
- [ ] Submit button
- [ ] Error handling
```

The `repoPath` field in frontmatter can override `CODE_PROJECTS_PATH` for specific tasks:

```yaml
---
id: TASK-002
title: Fix bug in other project
repoPath: /Users/alex/code/other-project
---
```
