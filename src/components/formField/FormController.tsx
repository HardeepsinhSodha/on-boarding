import type { iInputProps } from './Fields';
import { InputField, InputGroupField } from './Fields';
import FieldWrapper, { iFieldWraperProps } from './FieldWrapper';

export type FormControllerType = 'input' | 'inputGroup';
export interface FormControllerProps
  extends Omit<iFieldWraperProps, 'children'>,
    iInputProps {
  controller: FormControllerType;
}
const fieldMaping = {
  input: InputField,
  inputGroup: InputGroupField,
};
export default function FormController(props: FormControllerProps) {
  const Field = fieldMaping?.[props.controller];

  return (
    <FieldWrapper {...props}>
      <Field {...props} />
    </FieldWrapper>
  );
}
