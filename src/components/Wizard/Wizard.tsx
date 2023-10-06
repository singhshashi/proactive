import React, { useState, useContext } from "react";
import { Button, IconButton } from "../Button/Button";
import { clsx } from "clsx";

export interface WizardProps {
  children: React.ReactNode[];
  width: string;
  height: string;
  onFinish: () => void;
  useIconButtons?: boolean;
}

export interface WizardButtonControlProps {
  showPreviousButton: boolean;
  showNextButton: boolean;
  showDoneButton: boolean;
  onBack: () => void;
  onNext: () => void;
  onDone: () => void;
  useIconButtons?: boolean;
}

export type WizardContextType = {
  setStepReady: (stepIndex: number, isReady: boolean) => void;
};

const defaultWizardContextValue: WizardContextType = {
  setStepReady: () => {},
};

export const WizardContext = React.createContext<WizardContextType>(
  defaultWizardContextValue
);

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (context === null) {
    throw new Error("useWizard must be used within a Wizard");
  }
  return context;
};

const WizardButtonControl: React.FC<WizardButtonControlProps> = ({
  showPreviousButton,
  showNextButton,
  showDoneButton,
  onBack,
  onNext,
  onDone,
  useIconButtons,
}) => {
  const classes = clsx({
    "justify-between": showPreviousButton,
    "justify-end": !showPreviousButton,
    flex: true,
    "w-full": true,
    "align-baseline": true,
  });
  if (useIconButtons === undefined) {
    useIconButtons = false;
  }
  let prevNextButtonPartial;
  if (useIconButtons) {
    prevNextButtonPartial = (
      <>
        {showPreviousButton && (
          <IconButton iconName="ArrowLeft" onClick={onBack} />
        )}
        {showNextButton && (
          <IconButton iconName="ArrowRight" onClick={onNext} />
        )}
      </>
    );
  } else {
    prevNextButtonPartial = (
      <>
        {showPreviousButton && (
          <Button variant="default" onClick={onBack}>
            Back
          </Button>
        )}
        {showNextButton && (
          <Button variant="primary" onClick={onNext}>
            Next
          </Button>
        )}
      </>
    );
  }

  return (
    <div className={classes}>
      {prevNextButtonPartial}
      {showDoneButton && (
        <Button variant="primary" onClick={onDone}>
          Done
        </Button>
      )}
    </div>
  );
};

export const Wizard: React.FC<WizardProps> = ({
  children,
  width,
  height,
  onFinish,
  useIconButtons,
}) => {
  type StepsReadyType = {
    [key: number]: boolean;
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [stepsNotReady, setStepsNotReady] = useState<StepsReadyType>({});

  const setStepReady = (stepIndex: number, isReady: boolean) => {
    if (isReady) {
      setStepsNotReady((prev) => {
        const newStepsNotReady = { ...prev };
        delete newStepsNotReady[stepIndex];
        return newStepsNotReady;
      });
    } else {
      setStepsNotReady((prev) => ({
        ...prev,
        [stepIndex]: true,
      }));
    }
  };

  const isCurrentStepReady = !stepsNotReady[currentStep];

  const styles = {
    width: `${width}`,
    height: `${height}`,
  };

  return (
    <div
      className="flex flex-col items-center gap-1 justify-between"
      style={styles}
    >
      <WizardContext.Provider value={{ setStepReady }}>
        <div className="w-full h-11/12 flex-grow">{children[currentStep]}</div>
        <div className="bottom-1 w-full">
          <WizardButtonControl
            showPreviousButton={currentStep !== 0}
            showNextButton={
              currentStep < children.length - 1 && isCurrentStepReady
            }
            showDoneButton={currentStep === children.length - 1}
            onBack={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            onNext={() =>
              setCurrentStep((prev) => Math.min(children.length - 1, prev + 1))
            }
            onDone={onFinish}
            useIconButtons={useIconButtons}
          />
        </div>
      </WizardContext.Provider>
    </div>
  );
};
