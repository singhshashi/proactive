import React from "react";
import { clsx } from "clsx";

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
  const isDark = shade === "dark";
  const isLight = shade === "light";

  const classes = clsx({
    "bg-gradient-to-t": true,
    "from-gray-50": isLight,
    "to-gray-100": isLight,
    "from-gray-200": isDark,
    "to-gray-300": isDark,
    "w-full": width === undefined,
    "h-full": height === undefined,
    "bg-opacity-50": type === "translucent",
    "bg-opacity-100": type === "solid" || type === undefined,
    "bg-opacity-25": type === "glossy",
  });

  const styles = {
    width: `${width}`,
    height: `${height}`,
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};
