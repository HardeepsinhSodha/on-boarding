import Header from './Header';
export default function Layout(props: any) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
