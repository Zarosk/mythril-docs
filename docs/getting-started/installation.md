---
sidebar_position: 2
title: Installation
---

# Installation Guide

This guide covers all the ways to add Mythril to your Discord server.

## Self-Hosted Installation

Mythril is open source and designed to be self-hosted on your own infrastructure.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Zarosk/mythril-bot
cd mythril-bot
```

### Step 2: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your settings:
- `DISCORD_BOT_TOKEN` - Create a bot at [Discord Developer Portal](https://discord.com/developers/applications)
- `ANTHROPIC_API_KEY` - Get from [console.anthropic.com](https://console.anthropic.com)

### Step 3: Start the Bot

Using Docker (recommended):
```bash
docker-compose up -d
```

Or using Node.js:
```bash
npm install
npm run build
npm start
```

### Step 4: Invite to Your Server

Generate an invite URL from the Discord Developer Portal. You need **Administrator** or **Manage Server** permissions on the target server.

### Step 5: Grant Permissions

Review and approve the requested permissions:

| Permission | Purpose |
|------------|---------|
| Send Messages | Respond to commands and queries |
| Use Slash Commands | Register and handle slash commands |
| Embed Links | Display rich, formatted responses |
| Read Message History | Provide context-aware assistance |
| Add Reactions | Interactive feedback options |
| Attach Files | Share generated code files |

### Step 4: Complete Authorization

Click **Authorize** and complete the CAPTCHA if prompted. Mythril will appear in your server's member list.

## Required Configuration

After installation, you must configure Mythril before use:

### 1. Set Up Your API Key

Mythril requires an Anthropic API key to function:

```
/settings apikey set sk-ant-your-key-here
```

Get your API key from the [Anthropic Console](https://console.anthropic.com).

### 2. Run Initial Setup

Configure Mythril for your server:

```
/mythril setup
```

## Permissions Explained

### Minimum Required Permissions

These permissions are essential for Mythril to function:

- **Send Messages** - Without this, Mythril cannot respond
- **Use Slash Commands** - Required for command registration
- **Embed Links** - Needed for formatted output

### Recommended Permissions

These enhance Mythril's capabilities:

- **Read Message History** - Enables context from recent messages
- **Add Reactions** - Allows interactive confirmations
- **Attach Files** - Permits sharing code as files
- **Manage Messages** - Allows cleanup of bot messages

### Channel-Specific Permissions

You can restrict Mythril to specific channels by configuring channel permissions in Discord:

1. Go to **Channel Settings** > **Permissions**
2. Add Mythril's role
3. Configure allowed/denied permissions per channel

## Verification

Confirm Mythril is working correctly:

```
/mythril status
```

You should see:
- Bot status: Online
- API key status: Configured
- Permissions: All required permissions granted

## Updating

To update your self-hosted Mythril instance:

```bash
git pull origin main
docker-compose down && docker-compose up -d --build
```

Or if running with Node.js:
```bash
git pull origin main
npm install
npm run build
npm start
```

## Removing Mythril

To remove Mythril from your server:

1. Go to **Server Settings** > **Integrations**
2. Find Mythril in the list
3. Click **Manage** > **Remove**

:::warning
Removing Mythril will delete all server-specific settings. Notes and tasks stored in the bot will be retained.
:::
