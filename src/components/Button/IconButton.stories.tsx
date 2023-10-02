import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./Button";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GoPreviousIconButton: Story = {
  args: {
    iconName: "ArrowLeft",
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => {
      const buttonElement = evt.target as HTMLButtonElement;
      buttonElement.textContent = "Clicked";
    },
  },
};

export const GoNextIconButton: Story = {
  args: {
    iconName: "ArrowRight",
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => {
      const buttonElement = evt.target as HTMLButtonElement;
      buttonElement.textContent = "Clicked";
    },
  },
};
