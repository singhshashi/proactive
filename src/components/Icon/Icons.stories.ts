import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps } from "./Icon";

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
    name: "Check",
    dimension: "24",
    color: "green",
  },
};

export const LightBulb: Story = {
  args: {
    name: "LightBulb",
    dimension: "24",
    color: "red",
  },
};
