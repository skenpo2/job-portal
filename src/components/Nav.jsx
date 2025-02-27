import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import TabLinks from '../components/TabLinks';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from './NavLinks';

const Nav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'emerald'
  );

  const handleTheme = () => {
    const newTheme = theme === 'emerald' ? 'dracula' : 'emerald';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <nav className=" w-full shadow-xl backdrop-blur-md bg-transparent fixed top-0 left-0 z-30">
      <div className="navbar p-0 align-element">
        <div className="navbar-start">
          <a className="btn hidden lg:flex btn-ghost font-bold text-secondary text-2xl">
            myJOB
          </a>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <TabLinks />
        </div>

        <div className=" navbar-end flex flex-end gap-6">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon*/}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon*/}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
