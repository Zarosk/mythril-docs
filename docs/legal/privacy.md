---
sidebar_position: 1
title: Privacy Policy
---

# Privacy Policy

**Last Updated: January 2025**

This Privacy Policy describes how Mythril ("we", "us", or "our") collects, uses, and shares information when you use our Discord bot service ("Service").

## Information We Collect

### Information You Provide

When you use Mythril, you may provide:

- **Discord User Information** - Your Discord user ID, username, and server membership
- **Commands and Prompts** - Text you send to Mythril commands
- **Notes and Tasks** - Content you save using our note and task features
- **API Keys** - Your Anthropic API key for AI features

### Information Collected Automatically

We automatically collect:

- **Usage Data** - Commands used, feature interactions, error occurrences
- **Server Information** - Discord server ID where Mythril is installed
- **Technical Data** - Timestamps, interaction success/failure status

## How We Use Your Information

We use collected information to:

- **Provide the Service** - Execute commands, store notes/tasks, enable AI features
- **Improve the Service** - Analyze usage patterns, fix bugs, develop features
- **Ensure Security** - Detect abuse, prevent unauthorized access
- **Communicate** - Send service announcements (rare, important updates only)

## Third-Party Services

### Anthropic (Claude AI)

When you use AI features (`/forge`), your prompts are sent to Anthropic's Claude API. This data is subject to [Anthropic's Privacy Policy](https://www.anthropic.com/privacy).

We send to Anthropic:
- Your prompt text
- Context from your notes (if context feature enabled)
- Recent channel messages (for context)

Your API key is sent directly to Anthropic and is not logged by us.

### Discord

Mythril operates on Discord's platform. Your use is subject to [Discord's Privacy Policy](https://discord.com/privacy).

## Data Storage

### What We Store

| Data Type | Stored | Duration | Purpose |
|-----------|--------|----------|---------|
| Discord User ID | Yes | Until deletion | Identify users |
| Notes | Yes | Until deleted | Provide note feature |
| Tasks | Yes | 90 days after completion | Provide task feature |
| API Keys | Yes (encrypted) | Until removed | Enable AI features |
| Prompts | No* | N/A | *Processed but not stored |
| Message Content | No* | N/A | *Processed but not stored |

### Where We Store

Data is stored on secure servers with:
- Encryption at rest
- Access controls
- Regular security audits

### Data Retention

- **Active Data** - Retained while you use the Service
- **Completed Tasks** - Retained 90 days, then deleted
- **Notes** - Retained until you delete them
- **API Keys** - Retained until you remove them
- **Data Deletion** - Data is stored locally on your server. Delete by removing the database file or running `/settings data delete`

## Your Rights

### Access Your Data

Request a copy of your data:
```
/settings export
```

### Delete Your Data

Delete your data:
```
/settings data delete
```

Or contact us at privacy@mythril.dev

### Data Portability

Export your data in JSON format:
```
/settings export format:json
```

### Opt Out

- **Context Learning**: Disable with `/settings feature context disabled`
- **Usage Analytics**: Disable with `/settings feature analytics disabled`

## Children's Privacy

Mythril is not intended for users under 13 years old. We do not knowingly collect information from children under 13. If we learn we have collected such information, we will delete it promptly.

## Security

We implement security measures including:

- **Encryption** - Data encrypted in transit (HTTPS) and at rest
- **Access Control** - Limited access to production systems
- **API Key Protection** - Keys encrypted before storage
- **Regular Audits** - Periodic security reviews

However, no system is completely secure. We cannot guarantee absolute security.

## International Data Transfers

Data may be processed in countries outside your residence. We ensure appropriate safeguards are in place for international transfers.

## Changes to This Policy

We may update this Privacy Policy periodically. Changes will be:

1. Posted on this page with updated date
2. Announced in our Discord server (for significant changes)

Continued use after changes constitutes acceptance.

## Contact Us

For privacy-related questions or requests:

- **Email**: privacy@mythril.dev
- **Discord**: [Join our server](https://discord.gg/mythril) and contact a moderator

## Data Processing Basis

For users in the European Economic Area (EEA), we process data based on:

- **Contract** - To provide the Service you requested
- **Legitimate Interest** - To improve and secure the Service
- **Consent** - Where required by law

## Additional Rights (EEA/UK)

If you're in the EEA or UK, you have additional rights:

- **Right to Rectification** - Correct inaccurate data
- **Right to Restriction** - Limit processing of your data
- **Right to Object** - Object to processing based on legitimate interest
- **Right to Complaint** - File a complaint with your local data protection authority

## California Privacy Rights

California residents have rights under CCPA:

- **Right to Know** - What personal information we collect
- **Right to Delete** - Request deletion of your information
- **Right to Non-Discrimination** - Equal service regardless of privacy choices

We do not sell personal information.
