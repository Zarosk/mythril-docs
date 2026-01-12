---
sidebar_position: 1
title: Commands
---

# Commands

All Mythril slash commands.

## Execution Commands

### /mythril start

Start Claude Code execution for the active task.

```
/mythril start
```

The bot will:
1. Read the active task from `_orchestra/ACTIVE.md`
2. Build a prompt from the task description and acceptance criteria
3. Spawn: `claude --dangerously-skip-permissions -p "prompt"`
4. Stream output to a Discord thread
5. Wait for your approval

### /mythril stop

Stop the current execution.

```
/mythril stop [reason]
```

Sends SIGTERM to gracefully stop Claude Code. If it doesn't stop within 10 seconds, sends SIGKILL.

### /mythril approve

Approve and complete the current task.

```
/mythril approve [notes]
```

- Task file moves to `_orchestra/completed/`
- Optional notes are logged
- `ACTIVE.md` is cleared

### /mythril reject

Reject the current task.

```
/mythril reject <reason>
```

- Reason is **required**
- Task file moves to `_orchestra/blocked/`
- `ACTIVE.md` is cleared

## Task Commands

### /mythril status

Show the current active task.

```
/mythril status
```

Displays:
- Task ID and title
- Current status
- Whether execution is running
- Execution duration (if running)

### /mythril queue

List all queued tasks.

```
/mythril queue
```

Shows tasks in `_orchestra/queue/` sorted by priority.

### /mythril list

List tasks with optional filter.

```
/mythril list [filter]
```

Filter options:
- `all` - All tasks
- `queued` - Only queued
- `completed` - Only completed
- `blocked` - Only blocked

### /mythril pick

Activate a task from the queue.

```
/mythril pick <task-name>
```

- Moves task from `queue/` to `ACTIVE.md`
- Tab autocomplete shows available tasks

## Brain Commands

### /mythril brain

Add a note to the brain.

```
/mythril brain <content> [project]
```

Examples:

```
/mythril brain Remember to add error handling to auth
/mythril brain Use PostgreSQL for this project project:backend
```

Notes are stored in the Brain API and can provide context for Claude.

## Help

### /mythril help

Show all commands or help for a specific command.

```
/mythril help
/mythril help start
/mythril help approve
```

## Deprecated Prefix Commands

These still work but show deprecation warnings:

```
!mythril status
!mythril queue
!mythril start
!mythril stop [reason]
!mythril approve [notes]
!mythril reject <reason>
```

Use slash commands instead.

## Command Permissions

By default, all server members can use commands. Configure role restrictions in your Discord server's integration settings.

## Quick Reference

| Command | Description |
|---------|-------------|
| `/mythril start` | Start Claude Code execution |
| `/mythril stop` | Stop execution |
| `/mythril approve` | Approve completed task |
| `/mythril reject` | Reject task |
| `/mythril status` | Show current task |
| `/mythril queue` | List queued tasks |
| `/mythril list` | List tasks with filter |
| `/mythril pick` | Activate a task |
| `/mythril brain` | Add a note |
| `/mythril help` | Show help |
