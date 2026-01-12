---
sidebar_position: 1
title: Features Overview
---

# Features Overview

Mythril brings powerful AI capabilities to your Discord server, designed specifically for development teams.

## Core Features

### AI-Powered Development

Leverage Claude's advanced AI capabilities directly in Discord:

- **Code Generation** - Create functions, components, and entire files from natural language
- **Code Explanation** - Get detailed explanations of complex code
- **Bug Detection** - Identify issues and get fix suggestions
- **Refactoring** - Improve code quality with AI assistance

[Learn more about AI Integration →](/features/ai-integration)

### Task Management

Streamlined task workflows without leaving Discord:

- **Quick Creation** - Create tasks with simple slash commands
- **Status Tracking** - Monitor progress in real-time
- **Assignments** - Assign tasks to team members
- **Notifications** - Get updates on task changes

[Learn more about Task Management →](/features/task-management)

### Context Awareness

Mythril learns from your team's conversations:

- **Note Integration** - Reference saved notes automatically
- **Project Context** - Maintain per-project knowledge
- **Decision History** - Remember architectural decisions
- **Personalization** - Responses improve over time

[Learn more about Context Awareness →](/features/context-awareness)

### Bring Your Own Key (BYOK)

Complete control over your AI usage:

- **Your API Key** - Use your own Anthropic account
- **Cost Control** - Manage usage and spending directly
- **Data Privacy** - Your data stays with Anthropic
- **No Middleman** - Direct API access

[Learn more about BYOK →](/features/byok)

## Quick Feature Guide

### For Developers

| Need | Feature | Command |
|------|---------|---------|
| Generate code | AI Integration | `/forge` |
| Track work | Task Management | `/task create` |
| Save decisions | Notes | `/note add` |
| Set preferences | Settings | `/settings` |

### For Team Leads

| Need | Feature | Command |
|------|---------|---------|
| View team tasks | Task Management | `/task list` |
| Review decisions | Notes | `/note search` |
| Configure bot | Settings | `/settings` |

### For Admins

| Need | Feature | Command |
|------|---------|---------|
| Set up API key | BYOK | `/settings apikey` |
| Configure channels | Settings | `/settings channel` |
| Manage permissions | Settings | `/settings permissions` |

## Getting Started with Features

### 1. Set Up Your API Key

Before using AI features, configure your Anthropic API key:

```
/settings apikey set sk-ant-xxxxx
```

### 2. Try Code Generation

Generate your first piece of code:

```
/forge Write a function to validate email addresses
```

### 3. Create a Task

Track your work:

```
/task create title:My first task
```

### 4. Save a Note

Capture important information:

```
/note add This is my first note in Mythril
```

## Feature Requests

Have an idea for a new feature? We'd love to hear it:

1. Join our [Discord Community](https://discord.gg/mythril)
2. Post in the #feature-requests channel
3. Vote on existing feature requests

Popular feature requests are prioritized for development.
