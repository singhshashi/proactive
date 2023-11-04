import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "radio" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Done",
    variant: "primary",
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => {
      const buttonElement = evt.target as HTMLButtonElement;
      if (!buttonElement) return;
      if (buttonElement.textContent === "Done") {
        buttonElement.textContent = "Clicked";
      } else {
        buttonElement.textContent = "Done";
      }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByRole("button")).toHaveTextContent("Done");
    // button was clicked.
    await userEvent.click(canvas.getByRole("button"));

    expect(canvas.getByRole("button")).toHaveTextContent("Clicked");
  },
};

export const PrimaryMedium: Story = {
  args: {
    children: "Done",
    variant: "primary",
    size: "medium",
  },
};

export const DefaultMedium: Story = {
  args: {
    children: "Details...",
    variant: "default",
    size: "medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Done",
    variant: "primary",
    size: "large",
  },
};

export const Default: Story = {
  args: {
    children: "Details...",
    variant: "default",
    size: "small",
  },
};
