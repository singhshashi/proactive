import React from "react";

export interface WizardStepProps {
  children: React.ReactNode;
  stepName: string;
}

export const WizardStep: React.FC<WizardStepProps> = ({
  children,
  stepName,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">{children}</div>
    </div>
  );
};
