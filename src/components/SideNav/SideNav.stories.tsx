import type { Story, Meta, StoryObj } from "@storybook/react";
import { SideNav, SideNavProps } from "./SideNav";

const meta = {
  title: "Example/SideNav",
  component: SideNav,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof meta>;

const navItems = [
  {
    label: "Shortcuts",
    icon: "Keyboard",
    isSelected: true,
    key: "Shortcuts",
  },
  {
    label: "Screen To Record",
    icon: "Tv",
    isSelected: false,
    key: "screenToRecord",
  },
  {
    label: "Website Blocking",
    icon: "XOctagonFill",
    isSelected: false,
    key: "websiteBlocking",
  },
  {
    label: "Focus Session",
    icon: "RecordCircle",
    isSelected: false,
    key: "focusSession",
  },
];
export const Default: Story = {
  args: {
    items: navItems,
    onSelectionChange: (selectedItem: any) => {
      navItems.forEach((item) => {
        item.isSelected = false;
        if (item.key === selectedItem.key) {
          item.isSelected = true;
          console.log("selected item: ", item);
        }
      });
    },
  },
};
