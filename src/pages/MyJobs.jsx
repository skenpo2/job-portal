import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MyJobs = () => {
  return (
    <div className=" align-element mt-20 p-4 mb-4 ">
      <div role="tablist" className="tabs tabs-box">
        <NavLink
          to={'.'}
          role="tab"
          className={({ isActive }) =>
            `tab capitalize  font-bold ${isActive ? 'tab-active' : ''}`
          }
        >
          Applied
        </NavLink>
        <NavLink
          to={'posted'}
          role="tab"
          className={({ isActive }) =>
            `tab capitalize  font-medium ${isActive ? 'tab-active' : ''}`
          }
        >
          Posted
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default MyJobs;
