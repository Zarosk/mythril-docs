---
sidebar_position: 2
title: AI Integration
---

# AI Integration

How Mythril integrates with Claude.

## Two AI Systems

Mythril uses Claude in two distinct ways:

### 1. Claude Code (Task Execution)

For running tasks via `/mythril start`:

```
Discord: /mythril start
    ↓
Mythril Bot: Reads task from ACTIVE.md
    ↓
Mythril Bot: Spawns subprocess
    ↓
Shell: claude --dangerously-skip-permissions -p "prompt"
    ↓
Claude Code: Executes, creates files, makes changes
    ↓
Mythril Bot: Streams output to Discord thread
```

This runs **locally on your machine**. Claude Code has full filesystem access.

### 2. Claude API (Conversational Chat)

For messages in `#mythril-chat`:

```
Discord: User sends message
    ↓
Mythril Bot: Gathers context from Brain API
    ↓
Mythril Bot: POST to api.anthropic.com/v1/messages
    ↓
Claude API: Returns response
    ↓
Mythril Bot: Posts response to Discord
```

This uses the **Anthropic HTTP API**. No local execution.

## Claude Code Execution Details

When you run `/mythril start`, here's what happens:

### 1. Task Reading

Bot reads `_orchestra/ACTIVE.md` and extracts:
- Task ID and title
- Description
- Acceptance criteria

### 2. Prompt Building

Bot constructs a prompt:

```
Execute task: TASK-001 - Build login page

Create a login page with email/password fields.

Acceptance Criteria:
- [ ] Email input with validation
- [ ] Password input
- [ ] Submit button
- [ ] Error handling

Instructions:
1. Work through each acceptance criterion
2. Update the task file as you complete work
3. When done, set status to PENDING_REVIEW
```

### 3. Subprocess Spawning

Bot runs:
```bash
claude --dangerously-skip-permissions -p "prompt"
```

Using Node.js `child_process.exec` with:
- 50MB output buffer
- Working directory from task's `repoPath` or `CODE_PROJECTS_PATH`
- Environment inherited from parent process

### 4. Output Streaming

- stdout/stderr captured via event handlers
- Buffered for 1.5 seconds or 1500 characters
- Posted to Discord thread in code blocks
- Full output preserved for review

### 5. Process Lifecycle

- `SIGTERM` sent on `/mythril stop`
- `SIGKILL` after 10 second grace period
- 1 hour execution timeout (configurable)

## Conversational Mode Details

In `#mythril-chat`, the bot:

### 1. Gathers Context

Calls Brain API for:
- Notes matching keywords in your message
- Recent notes (last 10)
- Active tasks

### 2. Builds Request

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1024,
  "system": "You are an AI assistant with access to the user's notes and tasks...",
  "messages": [
    {
      "role": "user",
      "content": "Context from Brain:\n...\n\nUser question: ..."
    }
  ]
}
```

### 3. Handles Response

- Extracts text from response
- Splits if > 2000 characters (Discord limit)
- Posts to channel as reply

## BYOK Model

Both systems use your Anthropic API key:

- **Claude Code**: Uses key configured in Claude Code CLI
- **Claude API**: Uses `ANTHROPIC_API_KEY` from `.env`

You pay Anthropic directly. Mythril never sees your conversations.

## Rate Limits

### Claude Code
- No rate limit from Mythril (one execution at a time)
- Subject to your Anthropic account limits

### Claude API (Chat)
- Brain API has configurable rate limits
- Anthropic API has account-based limits
- Bot shows warnings when approaching limits

## Model Selection

### Claude Code
Uses whatever model Claude Code defaults to. Currently Claude Sonnet 4.

### Conversational Chat
Hardcoded to `claude-sonnet-4-20250514`. Good balance of speed and capability.

## Security Considerations

### Claude Code
- Has **full filesystem access** via `--dangerously-skip-permissions`
- Can read/write/delete any file
- Can execute commands
- Only use with trusted code

### Claude API
- Only sends message content + context
- No filesystem access
- Subject to Anthropic's privacy policy
