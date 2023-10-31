import React from "react";
import { Icon } from "../..";

export type NavItem = {
  key: string;
  label: string;
  icon: string;
  isSelected: boolean;
};

export interface SideNavProps {
  items: Array<NavItem>;
  onSelectionChange: (selectedItem: NavItem) => void;
}

export const SideNav: React.FC<SideNavProps> = ({
  items,
  onSelectionChange,
}) => {
  return (
    <div className="flex flex-col h-full ">
      {items.map((item: NavItem, index: number) => {
        const classes = `w-full px-2 py-2 flex items-center justify-start gap-3 ${
          item.isSelected ? "bg-blue-300 text-white rounded" : ""
        }`;

        const iconColor = item.isSelected ? "#ffffff" : "#60a5fa";
        return (
          <div
            className={classes}
            key={`item-${index}`}
            onClick={() => onSelectionChange(item)}
          >
            <Icon name={item.icon} dimension="24" color={iconColor} />
            <div className="text-sm">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};
