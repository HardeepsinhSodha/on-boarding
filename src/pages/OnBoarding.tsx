import { useState } from 'react';

import Logo from '../components/logo/Logo';
import StepFourForm from '../components/onBoarding/StepFourForm';
import StepOneForm from '../components/onBoarding/StepOneForm';
import StepThreeForm from '../components/onBoarding/StepThreeForm';
import StepTwoForm from '../components/onBoarding/StepTwoForm';
import OnBoardingSteps from '../components/setps/OnBoardingSteps';

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="container md:max-w-xl max-w-md items-center  flex flex-col mx-auto min-h-screen">
      <Logo additionalClassName="my-6" />
      <div className="w-full max-w-full">
        <OnBoardingSteps currentStep={currentStep} />
        {currentStep === 1 && (
          <StepOneForm onSuccessfullSubmit={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <StepTwoForm onSuccessfullSubmit={() => setCurrentStep(3)} />
        )}
        {currentStep === 3 && (
          <StepThreeForm onSuccessfullSubmit={() => setCurrentStep(4)} />
        )}
        {currentStep === 4 && (
          <StepFourForm onSuccessfullSubmit={() => setCurrentStep(1)} />
        )}
      </div>
    </div>
  );
}
