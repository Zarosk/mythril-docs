---
sidebar_position: 3
title: Configuration
---

# Configuration Guide

Customize Mythril to fit your team's workflow.

## API Key Configuration

### Setting Your API Key

Mythril uses a Bring Your Own Key (BYOK) model. Each server needs an Anthropic API key:

```
/settings apikey set sk-ant-api03-xxxxx
```

### Checking API Key Status

Verify your API key is configured:

```
/settings apikey check
```

Response includes:
- Key status (valid/invalid)
- Key prefix (for identification)
- Last used timestamp

### Removing Your API Key

To remove your API key:

```
/settings apikey remove
```

:::caution
Removing your API key will disable all AI features until a new key is set.
:::

## Channel Configuration

### Default Response Channel

Set where Mythril sends responses by default:

```
/settings channel default #mythril-responses
```

### Task Channel

Configure a dedicated channel for task updates:

```
/settings channel tasks #dev-tasks
```

### Notes Channel

Set where notes are archived:

```
/settings channel notes #team-notes
```

## Model Configuration

### Selecting the AI Model

Choose which Claude model to use:

```
/settings model claude-sonnet-4-20250514
```

Available models:
| Model | Best For |
|-------|----------|
| `claude-sonnet-4-20250514` | Balanced performance and cost (recommended) |
| `claude-opus-4-20250514` | Complex reasoning tasks |
| `claude-3-5-haiku-20241022` | Fast, lightweight responses |

### Response Length

Configure maximum response length:

```
/settings maxlength 4000
```

Range: 500 - 8000 characters

## Team Settings

### Admin Roles

Designate roles that can modify Mythril settings:

```
/settings admins add @Developers
```

### User Restrictions

Limit who can use Mythril commands:

```
/settings allow role @Team
```

Or restrict specific commands:

```
/settings restrict command forge role @Developers
```

## Feature Toggles

Enable or disable specific features:

### Context Learning

```
/settings feature context enabled
```

When enabled, Mythril learns from conversations to provide better responses.

### Task Notifications

```
/settings feature notifications enabled
```

Get notified about task updates and deadlines.

### Auto-Archive Notes

```
/settings feature autoarchive enabled
```

Automatically archive notes older than 30 days.

## Viewing Current Configuration

See all current settings:

```
/settings view
```

Or view a specific category:

```
/settings view channels
/settings view permissions
/settings view features
```

## Resetting Configuration

Reset all settings to defaults:

```
/settings reset
```

:::danger
This action cannot be undone. All custom configuration will be lost.
:::

## Configuration Export/Import

### Export Settings

Save your configuration:

```
/settings export
```

Mythril will DM you a configuration file.

### Import Settings

Restore from a previous export:

```
/settings import
```

Then upload your configuration file when prompted.

## Best Practices

### Security

- Never share your API key publicly
- Use role-based access for sensitive commands
- Regularly rotate your API key

### Performance

- Use `claude-3-5-haiku-20241022` for simple queries
- Reserve `claude-opus-4-20250514` for complex tasks
- Set appropriate max lengths to control costs

### Organization

- Use dedicated channels for different functions
- Configure admin roles appropriately
- Document your configuration for team members
