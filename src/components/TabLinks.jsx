import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: 'about',
    text: 'about us',
  },
  {
    id: 3,
    url: 'myjobs',
    text: 'my jobs',
  },
  {
    id: 4,
    url: 'profile',
    text: 'profile',
  },
];

const NavLinks = () => {
  return (
    <div role="tablist" className="tabs tabs-border">
      {navLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <NavLink
            role="tab"
            className={({ isActive }) =>
              `tab capitalize font-medium ${isActive ? 'tab-active' : ''}`
            }
            key={id}
            to={url}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
