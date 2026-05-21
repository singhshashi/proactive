import React, { useMemo } from "react";
import { ProactiveThemeOverrides, defaultTheme, mergeTheme } from "./theme";
import { ProactiveThemeContext } from "./themeContext";

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ProactiveThemeOverrides;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  const mergedTheme = useMemo(() => mergeTheme(defaultTheme, theme), [theme]);

  return (
    <ProactiveThemeContext.Provider value={mergedTheme}>
      {children}
    </ProactiveThemeContext.Provider>
  );
};
