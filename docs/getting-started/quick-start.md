---
sidebar_position: 1
title: Quick Start
---

# Quick Start Guide

Get Mythril running in your Discord server in under 5 minutes.

## Prerequisites

Before you begin, you'll need:

- A Discord server where you have **Administrator** permissions
- An Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))

## Step 1: Clone and Configure

Clone the Mythril repository:

```bash
git clone https://github.com/Zarosk/mythril-bot
cd mythril-bot
```

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
- `DISCORD_BOT_TOKEN` - Your Discord bot token
- `ANTHROPIC_API_KEY` - Your Anthropic API key

## Step 2: Start the Bot

Run Mythril using Docker:

```bash
docker-compose up -d
```

Or run directly with Node.js:

```bash
npm install
npm run build
npm start
```

## Step 3: Invite to Your Server

Generate an invite link from the [Discord Developer Portal](https://discord.com/developers/applications) for your bot. Required permissions:

- **Send Messages** - To respond to commands
- **Use Slash Commands** - To register and handle commands
- **Embed Links** - To display rich responses
- **Read Message History** - For context-aware features

## Step 4: Initial Setup

Once Mythril joins your server, run the setup command:

```
/mythril setup
```

This wizard will guide you through:

1. Selecting a channel for Mythril responses
2. Configuring team settings
3. Setting up optional features

## Step 5: Verify Your API Key

Your Anthropic API key should already be configured in your `.env` file. Verify it's working:

```
/settings apikey check
```

:::tip Security
Your API key is stored in your local `.env` file and never leaves your server.
:::

## Step 6: Start Using Mythril

You're ready to go! Try these commands:

### Generate Code

```
/forge Generate a TypeScript function that validates email addresses
```

### Create a Task

```
/task create title:Implement user authentication priority:high
```

### Save a Note

```
/note add We decided to use PostgreSQL for the database
```

### Get Help

```
/mythril help
```

## What's Next?

- Learn about all [Commands](/commands)
- Explore [Features](/features) in depth
- Check out [Configuration](/getting-started/configuration) options

## Troubleshooting

### Mythril isn't responding

1. Check that Mythril has permissions in the channel
2. Verify your API key is set correctly with `/settings apikey check`
3. Ensure you're using slash commands (starting with `/`)

### API key errors

- Make sure your API key is valid and has available credits
- Check for typos when entering the key
- Visit the [Anthropic Console](https://console.anthropic.com) to verify your key status

Still having issues? Join our [Discord Community](https://discord.gg/mythril) for support.
