---
sidebar_position: 5
title: Bring Your Own Key (BYOK)
---

# Bring Your Own Key (BYOK)

Mythril uses a Bring Your Own Key model for AI features. You provide your own Anthropic API key, giving you complete control over usage, costs, and data.

## What is BYOK?

With BYOK, you:

- **Use your own Anthropic API key** - Direct relationship with Anthropic
- **Control your costs** - Pay only for what you use
- **Own your data** - Data flows directly to Anthropic, not through us
- **Set your limits** - Configure rate limits and spending caps

## Why BYOK?

### Transparency

Know exactly what you're paying for. No hidden fees or markup on API usage.

### Privacy

Your conversations go directly to Anthropic. Mythril acts as a facilitator, not a middleman.

### Control

Set your own usage limits, choose your model, and manage costs directly.

### Flexibility

Use the same key across multiple servers or use different keys per server.

## Getting Started

### Step 1: Get an API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to **API Keys**
4. Click **Create Key**
5. Copy your new key (starts with `sk-ant-`)

:::warning
API keys are shown only once. Save it securely.
:::

### Step 2: Configure in Mythril

Add your key to Mythril:

```
/settings apikey set sk-ant-api03-your-key-here
```

### Step 3: Verify Setup

Confirm your key is working:

```
/settings apikey check
```

You should see:
- Status: Valid
- Key prefix: sk-ant-api03-xxx...
- Credits: Available

## Security

### How Your Key is Stored

1. **Encrypted at rest** - Keys are encrypted before storage
2. **Never logged** - Keys never appear in logs
3. **Never displayed** - Only key prefixes are shown
4. **Transmitted securely** - All API calls use HTTPS

### Best Practices

- **Never share your key** in public channels
- **Rotate keys periodically** - Create new keys and retire old ones
- **Use separate keys** per project or server if needed
- **Set spending limits** in the Anthropic console

### If Your Key is Compromised

1. Immediately revoke the key in [Anthropic Console](https://console.anthropic.com)
2. Remove from Mythril: `/settings apikey remove`
3. Create a new key
4. Add the new key: `/settings apikey set`

## Cost Management

### Understanding Costs

Anthropic charges based on tokens:

| Component | Description |
|-----------|-------------|
| Input tokens | Your prompt + context |
| Output tokens | Claude's response |

Pricing varies by model. Check [Anthropic Pricing](https://www.anthropic.com/pricing) for current rates.

### Estimating Usage

Typical usage patterns:

| Use Case | Approx. Tokens | Approx. Cost |
|----------|---------------|--------------|
| Simple code generation | 500-1000 | ~$0.01-0.02 |
| Complex explanation | 1000-3000 | ~$0.02-0.05 |
| Code review | 2000-5000 | ~$0.03-0.10 |

*Costs vary by model and response length*

### Setting Limits

In the Anthropic Console:

1. Go to **Settings** > **Limits**
2. Set **Monthly spending limit**
3. Configure **Rate limits** if needed

### Monitoring Usage

View your usage:
- **Anthropic Console** - Detailed usage dashboard
- **Mythril** - `/settings apikey check` shows last used

## Multi-Server Setup

### Same Key Across Servers

You can use one API key for multiple Discord servers:

**Pros:**
- Simpler management
- Single billing account

**Cons:**
- Shared rate limits
- No per-server cost tracking

### Different Keys Per Server

Use separate keys for different servers:

**Pros:**
- Independent rate limits
- Per-server cost tracking
- Better isolation

**Cons:**
- More keys to manage

## API Key Management

### Checking Key Status

```
/settings apikey check
```

Shows:
- Whether key is configured
- Key prefix (for identification)
- Last used timestamp
- Validity status

### Updating Your Key

```
/settings apikey set sk-ant-api03-new-key
```

The new key immediately replaces the old one.

### Removing Your Key

```
/settings apikey remove
```

:::caution
Removing your key disables all AI features until a new key is added.
:::

## Troubleshooting

### "API Key Invalid"

**Causes:**
- Typo in key
- Key was revoked
- Key doesn't exist

**Solutions:**
1. Copy key directly from Anthropic Console
2. Ensure no extra spaces
3. Verify key exists and is active

### "Rate Limit Exceeded"

**Causes:**
- Too many requests too fast
- Account rate limits reached

**Solutions:**
1. Wait a moment and retry
2. Check Anthropic Console for rate limit settings
3. Consider upgrading your Anthropic plan

### "Insufficient Credits"

**Causes:**
- Account has no credits
- Payment method issue

**Solutions:**
1. Add credits in Anthropic Console
2. Update payment method
3. Check for billing issues

### "API Key Not Configured"

**Causes:**
- Key not set for this server
- Key was removed

**Solutions:**
1. Set key with `/settings apikey set`
2. Verify you're in the right server

## FAQ

### Can I use a free tier key?

Yes, if Anthropic offers a free tier. Free tier limitations apply.

### Is my key visible to server admins?

No. Only the key prefix is ever visible, and only to the person who set it.

### What happens if I run out of credits?

AI features will return errors until credits are added.

### Can different users have different keys?

Currently, keys are per-server. All users share the server's key.

### Does Mythril store my conversations?

Mythril processes conversations to add context but doesn't permanently store them. Conversations are subject to Anthropic's data policies.

### Can I see my API usage?

Detailed usage is available in the [Anthropic Console](https://console.anthropic.com). Mythril shows basic stats with `/settings apikey check`.
