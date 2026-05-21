import { createContext } from "react";
import { ProactiveTheme, defaultTheme } from "./theme";

export const ProactiveThemeContext = createContext<ProactiveTheme>(defaultTheme);
