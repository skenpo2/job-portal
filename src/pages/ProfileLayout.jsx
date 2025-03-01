import { Outlet } from 'react-router-dom';
import SubTabLinks from '../components/SubTabLinks';

const ProfileLayout = () => {
  return (
    <div className="mt-8">
      <SubTabLinks />
      <Outlet />
    </div>
  );
};
export default ProfileLayout;
