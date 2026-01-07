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

## Step 1: Invite Mythril

Click the invite link below to add Mythril to your server:

[**Invite Mythril to Discord**](https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID)

Select your server and grant the requested permissions. Mythril needs these permissions to function:

- **Send Messages** - To respond to commands
- **Use Slash Commands** - To register and handle commands
- **Embed Links** - To display rich responses
- **Read Message History** - For context-aware features

## Step 2: Initial Setup

Once Mythril joins your server, run the setup command:

```
/mythril setup
```

This wizard will guide you through:

1. Selecting a channel for Mythril responses
2. Configuring team settings
3. Setting up optional features

## Step 3: Configure Your API Key

Mythril uses a Bring Your Own Key (BYOK) model. Add your Anthropic API key:

```
/settings apikey set sk-ant-xxxxx
```

:::tip Security
Your API key is encrypted and stored securely. It is never logged or shared.
:::

## Step 4: Start Using Mythril

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
