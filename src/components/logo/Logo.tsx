import logo from '../../aserts/images/logo.png';
interface props {
  additionalClassName?: string;
}
export default function Logo({ additionalClassName }: props) {
  return (
    <div className={`flex space-x-1 ${additionalClassName}`}>
      <img className="" src={logo} alt="Edem" width="40px" height="40px" />
      <h2 className="inline text-3xl font-bold">Eden</h2>
    </div>
  );
}
