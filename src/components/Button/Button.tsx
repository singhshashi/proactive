import React from "react";
import { clsx } from "clsx";
import { Icon, IconName } from "../Icon/Icon";

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
  const isPrimary = variant === "primary";
  const isDefault = variant === "default";
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
    "text-black": isDefault,
    "bg-white": isDefault,
    "hover:bg-gray-100": isDefault,
    "text-white": isPrimary,
    "bg-gradient-to-b": isPrimary,
    "from-blue-500": isPrimary,
    "to-blue-600": isPrimary,
    // border: isPrimary,
    // "border-blue-600": isPrimary,
    "active:bg-gray-500": isPrimary,
    "active:bg-blend-overlay": isPrimary,
    "active:shadow-sm": isPrimary,
    "active:text-gray-200": isPrimary,
    transition: true,
    "duration-200": true,
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export interface IconButtonProps {
  iconName: IconName;
  size?: number;
  disabled?: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  size = 36,
  disabled = false,
  onClick,
}) => {
  const classes = clsx({
    "rounded-lg": true,
    "px-4": true,
    "py-[0.1rem]": true,
    "text-sm": true,
    "hover:bg-gray-50": true,
  });
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      <Icon iconName={iconName} size={size} />
    </button>
  );
};
