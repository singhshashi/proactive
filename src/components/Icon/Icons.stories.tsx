import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Check: Story = {
  args: {
    iconName: "Check",
    color: "green",
    size: 36,
  },
};

export const Stopwatch: Story = {
  args: {
    iconName: "Stopwatch",
    color: "#232323",
    size: 36,
  },
};
