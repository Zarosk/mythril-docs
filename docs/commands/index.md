---
sidebar_position: 1
title: Commands Overview
---

# Commands Reference

Mythril provides a comprehensive set of slash commands for AI-powered development workflows.

## Command Categories

### Core Commands

| Command | Description |
|---------|-------------|
| `/forge` | Generate code, get explanations, and solve problems with AI |
| `/task` | Create and manage development tasks |
| `/note` | Save and retrieve contextual notes |
| `/settings` | Configure Mythril for your server |

### Quick Reference

| Command | Example | Description |
|---------|---------|-------------|
| `/forge` | `/forge Write a function to sort arrays` | AI-powered code generation |
| `/task create` | `/task create title:Login bug priority:high` | Create a new task |
| `/task list` | `/task list status:open` | View all tasks |
| `/note add` | `/note add Decided on PostgreSQL` | Save a note |
| `/note search` | `/note search database` | Find notes |
| `/settings apikey` | `/settings apikey set sk-ant-xxx` | Set your API key |

## Using Slash Commands

### Autocomplete

Mythril supports Discord's autocomplete feature. Start typing a command and Discord will show available options:

1. Type `/` in any channel where Mythril is active
2. Select `mythril` or the specific command
3. Fill in required parameters
4. Press Enter to execute

### Required vs Optional Parameters

- **Required parameters** must be provided for the command to work
- **Optional parameters** have default values and can be skipped

Example with optional parameters:
```
/task create title:Fix login bug
/task create title:Fix login bug priority:high assignee:@John
```

### Getting Help

For detailed help on any command:

```
/mythril help command:forge
```

Or view all available commands:

```
/mythril help
```

## Command Details

Explore each command category:

- [**Forge Command**](/commands/forge) - AI code generation and assistance
- [**Task Commands**](/commands/task) - Task management workflows
- [**Note Commands**](/commands/note) - Note-taking and retrieval
- [**Settings Commands**](/commands/settings) - Bot configuration

## Permissions

Some commands require specific permissions:

| Permission Level | Commands |
|-----------------|----------|
| Everyone | `/forge`, `/task list`, `/note search` |
| Members | `/task create`, `/note add` |
| Admins | `/settings`, `/task delete` |

Configure permissions with `/settings permissions`.
