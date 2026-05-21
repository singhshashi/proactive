import { useContext } from "react";
import { ProactiveTheme } from "./theme";
import { ProactiveThemeContext } from "./themeContext";

export const useProactiveTheme = (): ProactiveTheme => {
  return useContext(ProactiveThemeContext);
};
