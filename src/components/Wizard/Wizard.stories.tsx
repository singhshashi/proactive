import type { Meta, StoryObj } from "@storybook/react";
import { Wizard, WizardProps } from "./Wizard";
import { Step1, Step2, Step3 } from "./SampleWizardSteps";

const meta: Meta = {
  title: "Example/Wizard",
  component: Wizard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Wizard>;

export default meta;

type Story = StoryObj<typeof meta>;

const wizardSteps = [<Step1 />, <Step2 />, <Step3 />];

export const Default: Story = {
  args: {
    children: wizardSteps,
    width: "400px",
    height: "400px",
    onFinish: () => {
      console.log("Wizard finished");
    },
  },
};

export const WithIconButtons: Story = {
  args: {
    children: wizardSteps,
    width: "400px",
    height: "400px",
    onFinish: () => {
      console.log("Wizard finished");
    },
    useIconButtons: true,
  },
};
