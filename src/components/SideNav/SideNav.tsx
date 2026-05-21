import React from "react";
import { Icon, IconName } from "../Icon/Icon";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

export type NavItem = {
  key: string;
  label: string;
  icon: IconName;
  isSelected: boolean;
};

export interface SideNavProps {
  items: Array<NavItem>;
  onSelectionChange: (selectedItem: NavItem) => void;
  iconColor?: string;
}

export const SideNav: React.FC<SideNavProps> = ({
  items,
  onSelectionChange,
  iconColor,
}) => {
  const theme = useProactiveTheme();
  return (
    <div className="flex flex-col h-full gap-1 ">
      {items.map((item: NavItem, index: number) => {
        const classes = `w-full px-2 py-1 flex items-center justify-start gap-4 ${
          item.isSelected ? "rounded" : ""
        }`;

        const styles: React.CSSProperties = item.isSelected
          ? {
              backgroundImage: `linear-gradient(to right, ${theme.sideNav.selectedGradientFrom}, ${theme.sideNav.selectedGradientTo})`,
              color: theme.sideNav.selectedText,
            }
          : {
              color: theme.text.primary,
            };

        const inferredIconName = item.icon as IconName;
        const iconColorFinal = item.isSelected
          ? theme.sideNav.selectedText
          : iconColor
          ? iconColor
          : theme.sideNav.iconDefault;
        return (
          <div
            className={classes}
            style={styles}
            key={`item-${index}`}
            onClick={() => onSelectionChange(item)}
          >
            <Icon
              iconName={inferredIconName}
              size="20"
              color={iconColorFinal}
            />
            <div className="text-sm cursor-default">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};
