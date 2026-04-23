# Testing Setup

This project uses **Vitest** for unit and component testing.

## Available Scripts

- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with Vitest UI

## Testing Framework

- **Vitest**: Fast unit test framework built on top of Vite
- **React Testing Library**: Testing utilities for React components
- **jsdom**: DOM implementation for browser-like testing environment
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing

## Configuration

- **Test configuration**: Defined in `vite.config.ts`
- **Test setup**: `src/test/setup.ts` - includes jest-dom matchers
- **Environment**: jsdom (browser-like environment)
- **Globals**: Vitest globals are enabled (describe, it, expect, vi)

## Writing Tests

Tests should be placed next to the component they test with the `.spec.tsx` extension.

Example test structure:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Mocking

Use Vitest's `vi` for mocking:

```tsx
import { vi } from 'vitest';

// Mock a module
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));
```
