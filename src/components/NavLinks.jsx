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
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {navLinks.map((link) => {
        const { id, url, text } = link;
        if ((url === 'profile' || url === 'myjobs') && !user) {
          return null;
        }
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
