import { useSelector } from 'react-redux';
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
    url: 'contact',
    text: 'contact us',
  },

  {
    id: 4,
    url: 'profile',
    text: 'profile',
  },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <div role="tablist" className="tabs tabs-border">
      {navLinks.map((link) => {
        const { id, url, text } = link;
        if (url === 'profile' && !user) return null;
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
