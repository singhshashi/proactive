import React from "react";
import { clsx } from "clsx";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

export interface SurfaceProps {
  children: React.ReactNode;
  shade: "dark" | "light";
  type?: "solid" | "glossy" | "translucent";
  width?: string;
  height?: string;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  shade,
  type,
  width,
  height,
}) => {
  const theme = useProactiveTheme();
  const isLight = shade === "light";

  const classes = clsx({
    "w-full": width === undefined,
    "h-full": height === undefined,
  });

  // let bgColor = "#ffffff";
  // bgColor = isLight ? "#F5F1E9" : bgColor;
  // bgColor = isDark ? "#E7E3DB" : bgColor;

  const styles = {
    width: `${width}`,
    height: `${height}`,
    backgroundColor: isLight ? theme.surface.light : theme.surface.dark,
    opacity:
      type === "translucent" ? 0.5 : type === "glossy" ? 0.25 : 1,
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};
