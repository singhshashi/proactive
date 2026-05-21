import React from "react";
import { clsx } from "clsx";
import { Icon, IconName } from "../Icon/Icon";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "default";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  disabled = false,
  onClick,
}) => {
  const theme = useProactiveTheme();
  const isPrimary = variant === "primary";
  const isSmall = size === "small" || size === undefined;
  const isMedium = size === "medium";
  const isLarge = size === "large";

  const classes = clsx({
    "rounded-lg": true,
    "px-4": isSmall,
    "py-[0.1rem]": isSmall,
    "px-6": isMedium,
    "py-[0.2rem]": isMedium,
    "px-8": isLarge,
    "py-[0.3rem]": isLarge,
    "text-sm": isSmall,
    "text-base": isMedium,
    "text-lg": isLarge,
    "shadow-md": true,
    "hover:brightness-95": true,
    "active:brightness-90": true,
    "active:shadow-sm": isPrimary,
    "disabled:opacity-50": disabled,
    transition: true,
    "duration-200": true,
  });

  const style: React.CSSProperties = isPrimary
    ? {
        color: theme.button.primary.text,
        backgroundImage: `linear-gradient(to bottom, ${theme.button.primary.gradientFrom}, ${theme.button.primary.gradientTo})`,
      }
    : {
        color: theme.button.default.text,
        backgroundColor: theme.button.default.background,
      };

  return (
    <button className={classes} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export interface IconButtonProps {
  iconName: IconName;
  label?: string;
  size?: number;
  disabled?: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  label,
  size = 36,
  disabled = false,
  onClick,
}) => {
  const theme = useProactiveTheme();
  const classes = clsx({
    "rounded-lg": true,
    "px-4": true,
    "py-[0.1rem]": true,
    "text-sm": true,
    "hover:bg-gray-50": true,
    transition: true,
    "duration-200": true,
  });
  return (
    <button
      className={classes}
      style={{ backgroundColor: theme.button.iconButton.background }}
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? iconName}
    >
      <Icon iconName={iconName} size={size} />
    </button>
  );
};
