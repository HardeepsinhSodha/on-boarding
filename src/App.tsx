import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Layout from './components/layout/Layout';
import OnBoarding from './pages/OnBoarding';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <Layout>
      <OnBoarding />
    </Layout>
  );
}

export default App;
