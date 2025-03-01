import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../components/Nav';
import Loading from '../components/Loading';

const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <section className=" min-h-screen flex flex-col align-element p-6">
      <Nav />
      {isPageLoading ? <Loading /> : <Outlet />}
    </section>
  );
};
export default Home;
