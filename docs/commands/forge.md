---
sidebar_position: 2
title: /forge
---

# Forge Command

The `/forge` command is Mythril's primary AI interface. Use it to generate code, get explanations, debug issues, and solve programming problems.

## Basic Usage

```
/forge <prompt>
```

Simply describe what you need, and Mythril will generate a response using Claude AI.

## Examples

### Code Generation

```
/forge Write a TypeScript function that validates email addresses using regex
```

```
/forge Create a React component for a responsive navigation bar
```

```
/forge Generate SQL to create a users table with id, email, and created_at
```

### Explanations

```
/forge Explain how async/await works in JavaScript
```

```
/forge What's the difference between let and const?
```

### Debugging

```
/forge Why might this code cause a memory leak: [paste code]
```

```
/forge Find the bug in this function: [paste code]
```

### Refactoring

```
/forge Refactor this function to be more readable: [paste code]
```

```
/forge Convert this callback-based code to use async/await
```

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `prompt` | Yes | Your request or question |
| `language` | No | Target programming language |
| `context` | No | Additional context to include |

### Language Parameter

Specify the programming language for more accurate results:

```
/forge language:python Write a function to read CSV files
```

Supported languages include: JavaScript, TypeScript, Python, Go, Rust, Java, C#, Ruby, PHP, and more.

### Context Parameter

Provide additional context for better responses:

```
/forge context:We use Express.js for our backend Generate middleware for authentication
```

## Response Handling

### Code Blocks

Generated code is automatically formatted in code blocks with syntax highlighting:

```typescript
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

### Long Responses

For responses exceeding Discord's message limit (2000 characters), Mythril will:

1. Split the response into multiple messages
2. Or attach the full response as a file

### Follow-up Questions

You can continue the conversation by replying to Mythril's message:

1. Right-click Mythril's response
2. Select "Reply"
3. Type your follow-up question

Mythril will use the previous context to provide relevant answers.

## Tips for Better Results

### Be Specific

Instead of:
```
/forge Write a function
```

Try:
```
/forge Write a TypeScript function that takes an array of numbers and returns the sum of all even numbers
```

### Provide Context

Include relevant details:
```
/forge We're using React 18 with TypeScript. Create a custom hook for form validation that supports async validators
```

### Ask for Alternatives

Request multiple approaches:
```
/forge Show me three different ways to implement a debounce function in JavaScript
```

### Request Explanations

Ask for explanations with code:
```
/forge Write a binary search algorithm and explain how it works step by step
```

## Rate Limits

The `/forge` command is subject to rate limits to ensure fair usage:

- **Per user**: 20 requests per minute
- **Per server**: 100 requests per minute

If you hit rate limits, wait a moment before trying again.

## Error Handling

### API Key Issues

If you see "API key not configured":
1. Check your key with `/settings apikey check`
2. Set a valid key with `/settings apikey set`

### Content Filters

Some requests may be filtered if they:
- Request harmful code
- Attempt to bypass safety measures
- Violate terms of service

### Model Errors

If the AI returns an error:
1. Try rephrasing your request
2. Simplify complex requests
3. Check [Anthropic Status](https://status.anthropic.com) for outages
