import React from "react";
import { Icon, IconName } from "../Icon/Icon";

export type NavItem = {
  key: string;
  label: string;
  icon: string;
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
  return (
    <div className="flex flex-col h-full gap-1 ">
      {items.map((item: NavItem, index: number) => {
        const classes = `w-full px-2 py-1 flex items-center justify-start gap-4 ${
          item.isSelected
            ? " bg-gradient-to-r from-blue-400 to-blue-400 text-white rounded"
            : ""
        }`;

        const inferredIconName = item.icon as IconName;
        const iconColorFinal = item.isSelected
          ? "#ffffff"
          : iconColor
          ? iconColor
          : "#41414a";
        return (
          <div
            className={classes}
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
