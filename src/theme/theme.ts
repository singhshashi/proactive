export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export interface ProactiveTheme {
  surface: {
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    muted: string;
    inverse: string;
    error: string;
    divider: string;
  };
  button: {
    default: {
      text: string;
      background: string;
    };
    primary: {
      text: string;
      gradientFrom: string;
      gradientTo: string;
    };
    iconButton: {
      background: string;
    };
  };
  sideNav: {
    selectedGradientFrom: string;
    selectedGradientTo: string;
    selectedText: string;
    iconDefault: string;
  };
  dataGrid: {
    border: string;
    headerBackground: string;
    footerBackground: string;
    alternateRowBackground: string;
  };
  textBox: {
    border: string;
    focusRing: string;
    errorBorder: string;
    insetBorder: string;
  };
  multiSelectGrid: {
    selectedBackground: string;
    selectedBorder: string;
  };
  icon: {
    invalid: string;
  };
}

export type ProactiveThemeOverrides = DeepPartial<ProactiveTheme>;

export const defaultTheme: ProactiveTheme = {
  surface: {
    light: "#f5f5f5",
    dark: "#e4e4e7",
  },
  text: {
    primary: "#000000",
    muted: "#71717a",
    inverse: "#ffffff",
    error: "#fca5a5",
    divider: "#e4e4e7",
  },
  button: {
    default: {
      text: "#000000",
      background: "#ffffff",
    },
    primary: {
      text: "#ffffff",
      gradientFrom: "#3b82f6",
      gradientTo: "#2563eb",
    },
    iconButton: {
      background: "transparent",
    },
  },
  sideNav: {
    selectedGradientFrom: "#60a5fa",
    selectedGradientTo: "#60a5fa",
    selectedText: "#ffffff",
    iconDefault: "#41414a",
  },
  dataGrid: {
    border: "#e4e4e7",
    headerBackground: "#f4f4f5",
    footerBackground: "#f4f4f5",
    alternateRowBackground: "#fafafa",
  },
  textBox: {
    border: "#d4d4d8",
    focusRing: "#3b82f6",
    errorBorder: "#fca5a5",
    insetBorder: "#eeeeee",
  },
  multiSelectGrid: {
    selectedBackground: "#e5e7eb",
    selectedBorder: "#9ca3af",
  },
  icon: {
    invalid: "#ef4444",
  },
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const mergeDeep = <T extends object>(
  base: T,
  overrides: DeepPartial<T> | undefined
): T => {
  if (!overrides) {
    return base;
  }

  const merged: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  const overrideEntries = Object.entries(
    overrides as Record<string, unknown>
  );

  for (const [key, overrideValue] of overrideEntries) {
    if (overrideValue === undefined) {
      continue;
    }

    const baseValue = merged[key];
    if (isRecord(baseValue) && isRecord(overrideValue)) {
      merged[key] = mergeDeep(
        baseValue as Record<string, unknown>,
        overrideValue as DeepPartial<Record<string, unknown>>
      );
      continue;
    }

    merged[key] = overrideValue;
  }

  return merged as T;
};

export const mergeTheme = (
  baseTheme: ProactiveTheme,
  overrides?: ProactiveThemeOverrides
): ProactiveTheme => {
  return mergeDeep(baseTheme, overrides);
};
