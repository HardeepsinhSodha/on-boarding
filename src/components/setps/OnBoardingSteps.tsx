import { Steps } from 'react-daisyui';

interface props {
  currentStep: number;
}

export default function OnBoardingSteps({ currentStep }: props) {
  return (
    <Steps className="my-5 w-full max-w-full">
      <Steps.Step color="primary"></Steps.Step>
      <Steps.Step
        className="before:!h-1"
        color={currentStep >= 2 ? 'primary' : undefined}
      ></Steps.Step>
      <Steps.Step
        className="before:!h-1"
        color={currentStep >= 3 ? 'primary' : undefined}
      ></Steps.Step>
      <Steps.Step
        className="before:!h-1"
        color={currentStep >= 4 ? 'primary' : undefined}
      ></Steps.Step>
    </Steps>
  );
}
