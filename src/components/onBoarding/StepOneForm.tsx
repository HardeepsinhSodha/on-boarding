import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/store/utilityHooks';
import { stepOneFormValues } from '../../store/reducer/onBoardingSlice';
import SubmitButton from '../button/OnBoardingButton';
import FormController from '../formField/FormController';

export interface iStepOneForm {
  full_name: string;
  display_name: string;
}
const schema = Yup.object().shape({
  full_name: Yup.string().required('Required'),
  display_name: Yup.string().required('Required'),
});
interface props {
  onSuccessfullSubmit(): void;
}
export default function StepOneForm({ onSuccessfullSubmit }: props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const formik = useFormik<iStepOneForm>({
    initialValues: {
      full_name: '',
      display_name: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(stepOneFormValues(values));
        setLoading(false);
        onSuccessfullSubmit();
      }, 1000);
    },
    validationSchema: schema,
  });
  console.log(formik.touched);
  return (
    <div className="prose lg:prose-lg text-center prose-h2:mb-1 lg:prose-h2:mb-1 mt-6">
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later.</p>
      <form onSubmit={formik.handleSubmit} className="text-left">
        <FormController
          controller="input"
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Full Name"
          placeholder="Steve Jobs"
          error={formik.touched.full_name && formik.errors?.full_name}
          autoFocus={true}
        />
        <FormController
          controller="input"
          name="display_name"
          value={formik.values.display_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Display Name"
          placeholder="Steve"
          error={formik.touched.display_name && formik.errors?.display_name}
        />
        <SubmitButton loading={loading} title="Create Workspace" />
      </form>
    </div>
  );
}
