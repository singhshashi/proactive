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
    "bg-neutral-100": isLight,
    "bg-zinc-200": isDark,
    "w-full": width === undefined,
    "h-full": height === undefined,
    "bg-opacity-50": type === "translucent",
    "bg-opacity-100": type === "solid" || type === undefined,
    "bg-opacity-25": type === "glossy",
  });

  // let bgColor = "#ffffff";
  // bgColor = isLight ? "#F5F1E9" : bgColor;
  // bgColor = isDark ? "#E7E3DB" : bgColor;

  const styles = {
    width: `${width}`,
    height: `${height}`,
    // backgroundColor:`${bgColor}`
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};
