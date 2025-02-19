import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Home = () => {
  const isShow = true;
  return (
    <>
      <Nav />
      {isShow ? <Outlet /> : null}
    </>
  );
};
export default Home;
