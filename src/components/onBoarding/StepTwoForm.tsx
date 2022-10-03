import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/store/utilityHooks';
import { stepTwoFormValues } from '../../store/reducer/onBoardingSlice';
import SubmitButton from '../button/OnBoardingButton';
import FormController from '../formField/FormController';
export interface iStepTwoForm {
  workspace_name: string;
  workspace_url: string;
}
const schema = Yup.object().shape({
  workspace_name: Yup.string().required('Required'),
});
interface props {
  onSuccessfullSubmit(): void;
}
export default function StepOneForm({ onSuccessfullSubmit }: props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const formik = useFormik<iStepTwoForm>({
    initialValues: {
      workspace_name: '',
      workspace_url: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(stepTwoFormValues(values));
        setLoading(false);
        onSuccessfullSubmit();
      }, 1000);
    },
    validationSchema: schema,
  });

  return (
    <div className="prose lg:prose-lg text-center prose-h2:mb-1 lg:prose-h2:mb-1 mt-6">
      <h2>Lest's set up a home for all your work</h2>
      <p>You can always change them later.</p>
      <form onSubmit={formik.handleSubmit} className="text-left">
        <FormController
          controller="input"
          name="workspace_name"
          value={formik.values.workspace_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Workspace Name"
          placeholder="Eden"
          error={formik.touched.workspace_name && formik.errors?.workspace_name}
          autoFocus={true}
        />
        <FormController
          controller="inputGroup"
          name="workspace_url"
          value={formik.values.workspace_url}
          onChange={formik.handleChange}
          label="Workspace URL"
          secondaryLabel="optional"
          placeholder="Example"
          prependText="www.eden.com"
        />
        <SubmitButton loading={loading} title="Create Workspace" />
      </form>
    </div>
  );
}
