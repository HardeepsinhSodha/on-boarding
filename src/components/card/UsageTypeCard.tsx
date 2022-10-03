import type { FormikErrors } from 'formik';
import { iStepThreeForm } from '../onBoarding/StepThreeForm';
export interface iCardProps {
  usage_type: 'self' | 'team';
  title: string;
  description: string;
  current_value: 'self' | 'team';
  Icon(props: React.ComponentProps<'svg'>): JSX.Element;
  onClick(
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ): Promise<FormikErrors<iStepThreeForm>> | Promise<void>;
}
export default function Card({
  usage_type,
  title,
  description,
  current_value,
  Icon,
  onClick,
}: iCardProps) {
  return (
    <div
      className={`card cursor-pointer w-56 max-w-56 bg-base-100 border ${
        current_value === usage_type ? 'border-blue-500' : ''
      }`}
      onClick={() => onClick('usage_type', usage_type, true)}
    >
      <div className="card-body p-4">
        <Icon
          className={`h-6 w-6 ${
            current_value === usage_type ? 'text-blue-500' : ''
          }`}
        />
        <h3 className="card-title mt-3 lg:mt-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
