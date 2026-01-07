---
sidebar_position: 5
title: /settings
---

# Settings Command

The `/settings` command configures Mythril for your server. Only users with admin permissions can modify settings.

## Subcommands

| Subcommand | Description |
|------------|-------------|
| `apikey` | Manage your Anthropic API key |
| `channel` | Configure channel settings |
| `model` | Select the AI model |
| `permissions` | Manage command permissions |
| `feature` | Toggle features on/off |
| `view` | View current settings |
| `reset` | Reset to defaults |

## API Key Management

### Set Your API Key

```
/settings apikey set sk-ant-api03-xxxxx
```

:::tip Security
Your API key is encrypted before storage and never logged or displayed in full.
:::

### Check API Key Status

```
/settings apikey check
```

Shows:
- Whether a key is configured
- Key prefix (first 10 characters)
- Last used timestamp
- Validity status

### Remove API Key

```
/settings apikey remove
```

:::warning
Removing your API key disables all AI features until a new key is set.
:::

## Channel Configuration

### Set Default Channel

```
/settings channel default #mythril
```

All responses go to this channel by default.

### Set Task Channel

```
/settings channel tasks #dev-tasks
```

Task updates and notifications go here.

### Set Notes Channel

```
/settings channel notes #team-notes
```

Archived notes are posted here.

### View Channel Settings

```
/settings channel view
```

## Model Selection

### Set Model

```
/settings model claude-sonnet-4-20250514
```

### Available Models

| Model | Description | Best For |
|-------|-------------|----------|
| `claude-sonnet-4-20250514` | Balanced performance | Most tasks (default) |
| `claude-opus-4-20250514` | Highest capability | Complex reasoning |
| `claude-3-5-haiku-20241022` | Fast and efficient | Quick queries |

### View Current Model

```
/settings model view
```

## Permission Management

### Add Admin Role

```
/settings permissions admin add @Developers
```

### Remove Admin Role

```
/settings permissions admin remove @Developers
```

### Restrict Command to Role

```
/settings permissions restrict forge @Team
```

### Allow Command for Everyone

```
/settings permissions allow forge everyone
```

### View Permissions

```
/settings permissions view
```

## Feature Toggles

### Enable a Feature

```
/settings feature context enabled
```

### Disable a Feature

```
/settings feature notifications disabled
```

### Available Features

| Feature | Description | Default |
|---------|-------------|---------|
| `context` | Learn from conversations | Enabled |
| `notifications` | Task notifications | Enabled |
| `autoarchive` | Auto-archive old notes | Disabled |
| `threading` | Use threads for long responses | Enabled |
| `reactions` | Add reaction buttons | Enabled |

### View Feature Status

```
/settings feature view
```

## Viewing Settings

### View All Settings

```
/settings view
```

### View Specific Category

```
/settings view channels
/settings view permissions
/settings view features
/settings view model
```

## Reset Settings

### Reset Everything

```
/settings reset
```

:::danger
This resets ALL settings to defaults and cannot be undone.
:::

### Reset Specific Category

```
/settings reset channels
/settings reset permissions
```

## Export and Import

### Export Settings

```
/settings export
```

Mythril DMs you a configuration file.

### Import Settings

```
/settings import
```

Upload your configuration file when prompted.

## Settings Reference

### Default Values

| Setting | Default |
|---------|---------|
| Model | `claude-sonnet-4-20250514` |
| Max Response Length | 4000 characters |
| Context Learning | Enabled |
| Notifications | Enabled |
| Threading | Enabled |

### Limits

| Setting | Minimum | Maximum |
|---------|---------|---------|
| Max Response Length | 500 | 8000 |
| Rate Limit (user) | 5/min | 60/min |
| Rate Limit (server) | 50/min | 500/min |

## Troubleshooting

### Settings Not Saving

1. Ensure you have admin permissions
2. Check that Mythril has required permissions
3. Try the command in a different channel

### API Key Invalid

1. Verify the key at [console.anthropic.com](https://console.anthropic.com)
2. Ensure no extra spaces when pasting
3. Check that the key has available credits

### Permissions Not Working

1. Verify role hierarchy (Mythril's role must be high enough)
2. Check Discord server permissions
3. Use `/settings permissions view` to audit
