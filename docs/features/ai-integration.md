---
sidebar_position: 2
title: AI Integration
---

# AI Integration

Mythril integrates Claude, Anthropic's advanced AI assistant, directly into your Discord workflow. Generate code, get explanations, debug issues, and accelerate your development process.

## How It Works

When you use the `/forge` command:

1. Your prompt is sent to Claude via the Anthropic API
2. Mythril includes relevant context from your notes and recent conversations
3. Claude generates a response tailored to your needs
4. The response is formatted and delivered in Discord

```mermaid
graph LR
    A[Your Prompt] --> B[Mythril]
    B --> C[Context Enhancement]
    C --> D[Claude API]
    D --> E[Formatted Response]
    E --> F[Discord]
```

## Capabilities

### Code Generation

Create code from natural language descriptions:

```
/forge Create a TypeScript class for user authentication with JWT tokens
```

Claude generates production-ready code with:
- Proper typing and interfaces
- Error handling
- Best practices
- Inline comments when helpful

### Code Explanation

Understand complex code:

```
/forge Explain this regex: ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
```

Get clear explanations that break down:
- What each part does
- Why it's structured that way
- Common use cases
- Potential edge cases

### Debugging Assistance

Find and fix bugs:

```
/forge Why does this code throw a null reference error:
function getUser(id) {
  return users.find(u => u.id === id).name;
}
```

Claude identifies:
- The source of the error
- Why it occurs
- How to fix it
- Preventive patterns

### Code Review

Get feedback on your code:

```
/forge Review this function for potential improvements:
[paste your code]
```

Receive feedback on:
- Code quality
- Performance considerations
- Security concerns
- Readability improvements

### Refactoring

Improve existing code:

```
/forge Refactor this to use modern ES6+ syntax:
[paste legacy code]
```

## Model Selection

Choose the right Claude model for your needs:

### Claude Sonnet 4

**Best for**: Most development tasks

- Balanced speed and capability
- Excellent code generation
- Good for daily use
- Cost-effective

```
/settings model claude-sonnet-4-20250514
```

### Claude Opus 4

**Best for**: Complex reasoning tasks

- Highest capability
- Best for architectural decisions
- Complex debugging
- Detailed explanations

```
/settings model claude-opus-4-20250514
```

### Claude 3.5 Haiku

**Best for**: Quick queries

- Fastest response time
- Simple code generation
- Quick explanations
- Lowest cost

```
/settings model claude-3-5-haiku-20241022
```

## Context Enhancement

Mythril automatically enhances your prompts with relevant context:

### From Notes

When you ask about databases, Mythril finds your database-related notes:

```
/note add tags:database We use PostgreSQL with Prisma ORM
```

Later:
```
/forge Write a function to create a new user in the database
```

Claude knows to use PostgreSQL and Prisma.

### From Project Tags

Tag notes with projects for specific context:

```
/note add project:api Our API uses REST with JSON responses
```

### From Conversation History

Recent conversations in the same channel provide context for follow-up questions.

## Best Practices

### Be Specific

Instead of:
```
/forge Write a function
```

Try:
```
/forge Write a TypeScript async function that fetches user data from an API, handles errors with try-catch, and returns a typed User object
```

### Provide Examples

Include examples for better results:

```
/forge Generate a function similar to this one but for products:
function getUser(id: string): User { ... }
```

### Iterate

Start broad, then refine:

1. `/forge Create a basic React form component`
2. `/forge Add validation to this form [paste code]`
3. `/forge Add loading states and error handling`

### Use Follow-ups

Reply to Mythril's responses to continue the conversation:

> **Mythril**: Here's your user validation function...
>
> **You** (replying): Now add rate limiting to this

## Limitations

### Token Limits

Long responses may be truncated. For complex requests:
- Break into smaller parts
- Ask for summaries first
- Request code in sections

### Context Window

Claude has a context window limit. Very long conversations may lose early context.

### Code Execution

Claude generates code but doesn't execute it. Always review and test generated code.

### Specialized Knowledge

For cutting-edge or niche technologies, provide documentation or examples in your prompt.

## Security Considerations

### Sensitive Data

Never include in prompts:
- API keys or secrets
- Passwords
- Personal identifiable information
- Proprietary business logic you don't want shared

### Code Review

Always review generated code for:
- Security vulnerabilities
- Injection risks
- Proper input validation
- Safe error handling

### Model Improvements

Anthropic may use conversations to improve their models. Review their [privacy policy](https://www.anthropic.com/privacy) for details.

## Troubleshooting

### Slow Responses

- Consider using a faster model (Haiku)
- Simplify your prompt
- Check Anthropic API status

### Unexpected Results

- Add more context to your prompt
- Specify the programming language
- Provide examples of desired output

### API Errors

- Verify your API key with `/settings apikey check`
- Check your Anthropic account has credits
- Review rate limits
