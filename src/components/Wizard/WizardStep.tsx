import React from "react";

export interface WizardStepProps {
  stepindex: number;
  children: React.ReactNode;
}

export const WizardStep: React.FC<WizardStepProps> = ({
  stepindex,
  children,
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        stepindex: stepindex,
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};
