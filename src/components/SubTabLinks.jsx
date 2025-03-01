import { NavLink, Outlet } from 'react-router-dom';

const subPage = [
  { id: 1, name: 'profile', url: '.' },
  { id: 2, name: 'applied', url: 'applied' },
  { id: 3, name: 'posted', url: 'posted' },
];

const SubTabLinks = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-box">
        {subPage.map((page) => {
          const { id, name, url } = page;
          return (
            <NavLink
              key={id}
              end
              to={url}
              className={({ isActive }) =>
                `tab capitalize  font-medium ${isActive ? 'tab-active' : ''}`
              }
            >
              {name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default SubTabLinks;
