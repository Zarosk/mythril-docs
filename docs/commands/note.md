---
sidebar_position: 4
title: /note
---

# Note Command

The `/note` command lets you capture and retrieve information quickly. Save decisions, documentation snippets, and context that Mythril can use to provide better assistance.

## Subcommands

| Subcommand | Description |
|------------|-------------|
| `add` | Save a new note |
| `search` | Find notes by keyword |
| `list` | View recent notes |
| `view` | View a specific note |
| `delete` | Remove a note |

## Adding Notes

### Basic Note

```
/note add We decided to use PostgreSQL for the database
```

### Note with Project Tag

```
/note add project:backend Implemented rate limiting at 100 req/min
```

### Note with Tags

```
/note add tags:architecture,decision Chose microservices over monolith for scalability
```

### Full Note Options

```
/note add content:API authentication uses JWT tokens project:backend tags:auth,security
```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `content` | Yes | Note content |
| `project` | No | Project identifier |
| `tags` | No | Comma-separated tags |

## Searching Notes

### Keyword Search

```
/note search database
```

Searches note content for matching keywords.

### Search with Project Filter

```
/note search project:backend auth
```

### Search with Tags

```
/note search tags:decision
```

### Search Parameters

| Parameter | Description |
|-----------|-------------|
| `query` | Search keywords |
| `project` | Filter by project |
| `tags` | Filter by tags |
| `limit` | Max results (default: 10) |

## Listing Notes

### Recent Notes

```
/note list
```

Shows the 10 most recent notes.

### More Notes

```
/note list limit:25
```

### Filter by Project

```
/note list project:frontend
```

### Filter by Date

```
/note list since:2024-01-01
```

## Viewing Notes

```
/note view id:NOTE-456
```

Shows:
- Full note content
- Creation timestamp
- Project and tags
- Related tasks (if any)

## Deleting Notes

```
/note delete id:NOTE-456
```

:::caution
Note deletion is permanent. Consider if the information might be needed later.
:::

## Best Practices

### Document Decisions

Capture the "why" behind decisions:

```
/note add tags:decision,database Chose PostgreSQL over MongoDB because we need strong ACID compliance for financial transactions
```

### Save Code Snippets

Preserve useful patterns:

```
/note add tags:snippet,auth Standard JWT validation middleware: [paste code]
```

### Record Blockers

Note obstacles for future reference:

```
/note add tags:blocker,api Third-party API has 1000 req/day limit - need to implement caching
```

### Meeting Notes

Capture action items:

```
/note add project:sprint-12 tags:meeting Action items: 1. Fix auth bug 2. Update docs 3. Deploy to staging
```

## How Mythril Uses Notes

### Context Enhancement

When you use `/forge`, Mythril searches your notes for relevant context:

```
/forge How should we handle database connections?
```

Mythril will find notes about database decisions and include that context.

### Project Awareness

Tag notes with projects to build project-specific knowledge:

```
/note add project:api We use REST with JSON:API specification
```

Later queries about the API project will include this context.

### Decision History

Search past decisions to maintain consistency:

```
/note search tags:decision auth
```

## Note Templates

### Architecture Decision Record (ADR)

```
/note add tags:adr,decision
**Decision**: Use Redis for session storage
**Context**: Need fast session lookups
**Consequences**: Adds Redis dependency
```

### Bug Investigation

```
/note add tags:bug,investigation
**Issue**: Login timeout on mobile
**Found**: Network timeout too short
**Fix**: Increased timeout to 30s
```

### API Documentation

```
/note add project:api tags:endpoint
**Endpoint**: POST /api/users
**Auth**: Bearer token required
**Body**: { email, password, name }
```

## Export and Backup

Export all your notes:

```
/note export
```

Mythril will DM you a JSON file containing all notes.

Import from backup:

```
/note import
```

Then upload your backup file.
