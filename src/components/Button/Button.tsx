import React from "react";
import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";

export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "default";
  size?: "small" | "medium" | "large";
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
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
    "bg-gray-50": isDefault,
    "hover:bg-gray-100": isDefault,
    "text-white": isPrimary,
    "bg-blue-500": isPrimary,
    "hover:bg-blue-600": isPrimary,
  });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export interface IconButtonProps {
  iconName: string;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
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
    <button className={classes} onClick={onClick}>
      <Icon name={iconName} dimension="24" />
    </button>
  );
};
