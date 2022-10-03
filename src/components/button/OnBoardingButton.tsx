interface props {
  title: string;
  loading?: boolean;
  onClick?(): void;
}
export default function OnBoardingButton({
  loading,
  title,
  onClick = () => {},
}: props) {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center">
      <button
        className={`btn btn-primary w-full max-w-xs ${
          loading ? 'loading' : ''
        }`}
        type="submit"
        onClick={onClick}
      >
        {loading ? 'Submiting...' : title}
      </button>
    </div>
  );
}
