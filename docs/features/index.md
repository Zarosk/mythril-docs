---
sidebar_position: 1
title: Features
---

# Features

What Mythril does.

## Claude Code Orchestration

The core feature. Trigger Claude Code execution from Discord:

```
/mythril start
    ↓
claude --dangerously-skip-permissions -p "task prompt"
    ↓
Output streams to Discord thread
    ↓
/mythril approve
```

Why this matters:
- Control Claude Code from your phone
- No SSH or terminal access needed
- Watch execution in real-time
- Approve changes before they're final

## Real-time Output Streaming

Execution output appears in Discord threads as it happens:

- Buffered every 1.5 seconds
- Chunks of ~1500 characters
- Code blocks preserved
- Full conversation retained

You see exactly what Claude Code is doing, thinking, and creating.

## Task Management

Tasks live in your Obsidian vault:

```
_orchestra/
├── queue/       # Waiting tasks
├── ACTIVE.md    # Current task
├── completed/   # Approved tasks
└── blocked/     # Rejected tasks
```

Workflow:
1. Create task file in `queue/`
2. `/mythril pick TASK-001` to activate
3. `/mythril start` to execute
4. `/mythril approve` or `/mythril reject`

Task format:

```markdown
---
id: TASK-001
title: Build login page
project: my-app
status: queued
---

## Description
What needs to be done.

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
```

## Brain/Memory

Persistent storage for notes and context:

- Add notes: `/mythril brain <content>`
- Notes stored in Brain API (mythril-core)
- Context can be retrieved by Claude
- Syncs to Obsidian vault

Use cases:
- Project conventions
- Technical decisions
- Things Claude should remember

## Conversational AI

Chat with Claude in `#mythril-chat`:

```
You: What's the status of the auth refactor?
Mythril: Based on your recent notes and tasks...
```

How it works:
1. You send a message in the chat channel
2. Bot gathers context from Brain API
3. Sends to Claude API with your question
4. Returns contextual response

This uses the Claude API directly, not Claude Code.

## Mobile Control

Everything works from Discord mobile:

- Start/stop execution from your phone
- Approve/reject while away from computer
- Add notes on the go
- Monitor progress anywhere

## BYOK (Bring Your Own Key)

You provide your own Anthropic API key:

- Full control over usage
- Direct billing with Anthropic
- No middleman
- Your data stays yours

Configure in `.env`:
```bash
ANTHROPIC_API_KEY=sk-ant-your-key
```

## Security Model

Important to understand:

- `--dangerously-skip-permissions` gives Claude Code **full access**
- Claude Code runs on **your machine**
- Can read/write any files Claude Code can access
- Only run in trusted environments
- Only use with code you're okay with AI modifying
