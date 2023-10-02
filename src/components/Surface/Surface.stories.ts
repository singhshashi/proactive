import type { Meta, StoryObj } from "@storybook/react";
import { Surface, SurfaceProps } from "./Surface";

const meta = {
  title: "Example/Surface",
  component: Surface,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    shade: { control: "radio" },
    type: { control: "radio" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightSurface: Story = {
  args: {
    children: "Surface",
    shade: "light",
    width: "100px",
    height: "100px",
  },
};

export const DarkSurface: Story = {
  args: {
    children: "Surface",
    shade: "dark",
    type: "glossy",
    width: "100px",
    height: "100px",
  },
};
