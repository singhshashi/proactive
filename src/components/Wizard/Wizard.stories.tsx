import type { Meta, StoryObj } from "@storybook/react";
import { Wizard, useWizard } from "./Wizard";
import { WizardStep } from "./WizardStep";
import React, { useEffect } from "react";

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

const Step1 = () => {
  return (
    <WizardStep stepindex={0}>
      <div className="flex flex-col justify-around gap-2 h-full">
        <div className="text-sm">Step 1</div>
      </div>
    </WizardStep>
  );
};

const TermsAndConditionsStep: React.FC = () => {
  const { setStepReady } = useWizard();
  const [isAgreed, setIsAgreed] = React.useState(false);

  useEffect(() => {
    setStepReady(1, isAgreed);
  }, [isAgreed]);

  return (
    <div>
      {/* Display terms & conditions or other content here */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed((prev) => !prev)}
          />
          I accept the terms & conditions
        </label>
      </div>
    </div>
  );
};
const Step2 = () => {
  return (
    <WizardStep stepindex={1}>
      <TermsAndConditionsStep />
    </WizardStep>
  );
};

const Step3 = () => {
  return (
    <WizardStep stepindex={2}>
      <div className="flex flex-col justify-around gap-2 h-full">
        <div className="text-sm">Step 3</div>
      </div>
    </WizardStep>
  );
};

const wizardSteps = [<Step1 />, <Step2 />, <Step3 />];
<div className="flex flex-col justify-around gap-2 h-full">
  <div className="text-sm">Step 2</div>
</div>;

export const Default: Story = {
  args: {
    children: wizardSteps,
    width: "400px",
    height: "400px",
    onStepChange: (stepIndex: number) => {
      console.log(`Step changed to ${stepIndex}`);
    },
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
    onStepChange: (stepIndex: number) => {
      console.log(`Step changed to ${stepIndex}`);
    },
    onFinish: () => {
      console.log("Wizard finished");
    },
    useIconButtons: true,
  },
};
