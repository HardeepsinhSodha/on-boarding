import { useAppDispatch, useAppSelector } from '../../hooks/store/utilityHooks';
import {
  BoardingFormState,
  resetFormState,
} from '../../store/reducer/onBoardingSlice';
import OnBoardingButton from '../button/OnBoardingButton';

interface props {
  onSuccessfullSubmit(): void;
}
export default function StepOneForm({ onSuccessfullSubmit }: props) {
  const { display_name, workspace_name } = useAppSelector(BoardingFormState);
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(resetFormState());
    onSuccessfullSubmit();
  };
  return (
    <div className="prose lg:prose-lg text-center prose-h2:mb-1 lg:prose-h2:mb-1 mt-6">
      <h2>Congratulations, {display_name}!</h2>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <OnBoardingButton
        title={`launch ${workspace_name}`}
        onClick={handleSubmit}
      />
    </div>
  );
}
