import React from "react";

export interface WizardStepProps {
  stepIndex: number;
  children: React.ReactNode;
}

export const WizardStep: React.FC<WizardStepProps> = ({
  stepIndex,
  children,
}) => {
  return <>{children}</>;
};
