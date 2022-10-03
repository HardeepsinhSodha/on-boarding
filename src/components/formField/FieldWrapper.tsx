export interface iFieldWraperProps {
  label?: string;
  error?: string | false;
  secondaryLabel?: string;
  name: string;
  children: any;
}
export default function FieldWraper(props: iFieldWraperProps) {
  const { label, error, secondaryLabel, name } = props;
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2">
      <div className="form-control w-full max-w-xs">
        <label htmlFor={name} className="label justify-start">
          <span className="label-text pr-1 font-semibold">{label}</span>
          {secondaryLabel && (
            <span className="label-text-alt">({secondaryLabel})</span>
          )}
        </label>
        {props.children}
        {error && (
          <label htmlFor={name} className="label-text text-error">
            {error}
          </label>
        )}
      </div>
    </div>
  );
}
