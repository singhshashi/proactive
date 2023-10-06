import React from "react";

export interface WizardStepProps {
  stepIndex: number;
  children: React.ReactNode;
}

export const WizardStep: React.FC<WizardStepProps> = ({
  stepIndex,
  children,
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        stepIndex: stepIndex,
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};
