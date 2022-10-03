import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { iStepOneForm } from '../../components/onBoarding/StepOneForm';
import type { iStepTwoForm } from '../../components/onBoarding/StepTwoForm';

import { RootState } from '../store';
interface iInitialState {
  full_name: string;
  display_name: string;
  workspace_name: string;
  workspace_url: string;
  usage_type: 'self' | 'team';
}

export const onBoardingSlice = createSlice({
  name: 'onBoarding',
  initialState: {
    full_name: '',
    display_name: '',
    workspace_name: '',
    workspace_url: '',
    usage_type: 'self',
  } as iInitialState,
  reducers: {
    stepOneFormValues: (state, action: PayloadAction<iStepOneForm>) => {
      state.full_name = action.payload.full_name;
      state.display_name = action.payload.display_name;
    },
    stepTwoFormValues: (state, action: PayloadAction<iStepTwoForm>) => {
      state.workspace_name = action.payload.workspace_name;
      state.workspace_url = action.payload.workspace_url;
    },
    resetFormState: (state) => {
      state.full_name = '';
      state.display_name = '';
      state.workspace_name = '';
      state.workspace_url = '';
      state.usage_type = 'self';
    },
  },
});

export const { stepOneFormValues, stepTwoFormValues, resetFormState } =
  onBoardingSlice.actions;
export const BoardingFormState = (state: RootState) => state.onBoarding;
export default onBoardingSlice.reducer;
