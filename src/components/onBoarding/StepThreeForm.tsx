import { UserGroupIcon, UserIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppSelector } from '../../hooks/store/utilityHooks';
import { BoardingFormState } from '../../store/reducer/onBoardingSlice';
import SubmitButton from '../button/OnBoardingButton';
import Card from '../card/UsageTypeCard';
export interface iStepThreeForm {
  usage_type: 'self' | 'team';
}
const schema = Yup.object().shape({
  usage_type: Yup.string().required('Required'),
});
interface props {
  onSuccessfullSubmit(): void;
}
export default function StepThreeForm({ onSuccessfullSubmit }: props) {
  const [loading, setLoading] = useState(false);
  const { workspace_name } = useAppSelector(BoardingFormState);
  const formik = useFormik<iStepThreeForm>({
    initialValues: {
      usage_type: 'self',
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onSuccessfullSubmit();
      }, 1000);
    },
    validationSchema: schema,
  });

  return (
    <div className="prose lg:prose-lg text-center prose-h2:mb-1 lg:prose-h2:mb-1 mt-6">
      <h2>How are you planning to use {workspace_name ?? 'Eden'}?</h2>
      <p>We'll streamline your setup experience accordingly.</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full p-4 items-center justify-center text-left"
      >
        <div className="flex flex-col sm:flex-row w-full p-4 items-center justify-around gap-4">
          <Card
            current_value={formik.values.usage_type}
            title="For myself"
            usage_type="self"
            description="Write better. Think more clearly Stay organize."
            Icon={UserIcon}
            onClick={formik.setFieldValue}
          />
          <Card
            current_value={formik.values.usage_type}
            title="With my team"
            usage_type="team"
            description="Wikis, docs, tasks & projects, all in one place"
            Icon={UserGroupIcon}
            onClick={formik.setFieldValue}
          />
        </div>
        <SubmitButton loading={loading} title="Create Workspace" />
      </form>
    </div>
  );
}
