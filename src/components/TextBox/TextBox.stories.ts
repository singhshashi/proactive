import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "./TextBox";

const meta = {
  title: "Example/TextBox",
  component: TextBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof TextBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleTextBox: Story = {
  args: {
    value: "",
    onChange: (value: string) => {
      console.log("newValue:", value);
    },
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const TextBoxWithErrorMessage: Story = {
  args: {
    value: "",
    onChange: (value: string) => {
      console.log("newValue:", value);
    },
    label: "Label",
    placeholder: "Placeholder",
    error: "Error message",
  },
};
