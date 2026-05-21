# @singhshashi/proactive

React component library for desktop UI, built with TypeScript and Tailwind CSS.

## Development

```bash
pnpm storybook
```

## Build

```bash
pnpm run build-lib
```

## Theming

The library ships with a default macOS-style theme. To customize it, wrap your app with `ThemeProvider` and pass partial theme overrides.

```tsx
import { Button, ThemeProvider } from "@singhshashi/proactive";

export function App() {
  return (
    <ThemeProvider
      theme={{
        button: {
          primary: {
            gradientFrom: "#14b8a6",
            gradientTo: "#0f766e",
            text: "#ecfeff",
          },
        },
      }}
    >
      <Button variant="primary" onClick={() => {}}>
        Done
      </Button>
    </ThemeProvider>
  );
}
```

If no `ThemeProvider` is used, components render with the default built-in theme.
