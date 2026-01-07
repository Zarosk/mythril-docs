---
sidebar_position: 3
title: /task
---

# Task Command

The `/task` command helps you manage development tasks directly in Discord. Create, track, and organize work without leaving your conversation.

## Subcommands

| Subcommand | Description |
|------------|-------------|
| `create` | Create a new task |
| `list` | List tasks with optional filters |
| `view` | View task details |
| `update` | Update task properties |
| `complete` | Mark a task as complete |
| `delete` | Delete a task |

## Creating Tasks

### Basic Task Creation

```
/task create title:Implement user login
```

### Full Task Creation

```
/task create title:Implement user login description:Add OAuth2 login flow priority:high assignee:@John due:2024-12-31
```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `title` | Yes | Task title (max 100 characters) |
| `description` | No | Detailed description |
| `priority` | No | `low`, `medium`, `high`, `critical` |
| `assignee` | No | User to assign the task to |
| `due` | No | Due date (YYYY-MM-DD format) |
| `tags` | No | Comma-separated tags |

## Listing Tasks

### View All Tasks

```
/task list
```

### Filter by Status

```
/task list status:open
/task list status:completed
/task list status:all
```

### Filter by Priority

```
/task list priority:high
/task list priority:critical
```

### Filter by Assignee

```
/task list assignee:@John
/task list assignee:me
```

### Combined Filters

```
/task list status:open priority:high assignee:me
```

## Viewing Task Details

```
/task view id:TASK-123
```

Shows:
- Task title and description
- Status and priority
- Assignee and due date
- Creation and update timestamps
- Related notes (if any)

## Updating Tasks

### Update Title

```
/task update id:TASK-123 title:New title
```

### Update Priority

```
/task update id:TASK-123 priority:critical
```

### Reassign Task

```
/task update id:TASK-123 assignee:@Jane
```

### Update Multiple Fields

```
/task update id:TASK-123 priority:high due:2024-12-15 assignee:@Jane
```

## Completing Tasks

### Mark Complete

```
/task complete id:TASK-123
```

### Complete with Notes

```
/task complete id:TASK-123 notes:Implemented with OAuth2
```

## Deleting Tasks

```
/task delete id:TASK-123
```

:::caution
Task deletion is permanent and cannot be undone. Consider marking tasks as complete instead.
:::

## Task Statuses

| Status | Description |
|--------|-------------|
| `open` | Task is created but not started |
| `in_progress` | Task is actively being worked on |
| `review` | Task is pending review |
| `completed` | Task is finished |
| `cancelled` | Task was cancelled |

### Status Transitions

```
/task update id:TASK-123 status:in_progress
```

Valid transitions:
- `open` → `in_progress`, `cancelled`
- `in_progress` → `review`, `open`, `cancelled`
- `review` → `completed`, `in_progress`
- `completed` → `open` (reopening)

## Priority Levels

| Priority | Use When |
|----------|----------|
| `low` | Nice to have, no deadline |
| `medium` | Should be done soon (default) |
| `high` | Important, has deadline |
| `critical` | Blocking issue, needs immediate attention |

## Tags

Organize tasks with tags:

### Add Tags on Creation

```
/task create title:Fix login bug tags:bug,auth,urgent
```

### Filter by Tags

```
/task list tags:bug
/task list tags:auth,frontend
```

## Task Notifications

When enabled, Mythril sends notifications for:

- Task assignments
- Status changes
- Approaching due dates
- Overdue tasks

Configure notifications:
```
/settings feature notifications enabled
```

## Examples

### Bug Report Workflow

```
/task create title:Login fails on mobile description:Users report 500 error on mobile login page priority:high tags:bug,mobile
```

### Feature Request

```
/task create title:Add dark mode description:Implement system-wide dark theme based on user preference priority:medium tags:feature,ui
```

### Sprint Planning

```
/task list status:open priority:high
/task update id:TASK-101 assignee:@Alice
/task update id:TASK-102 assignee:@Bob
```
