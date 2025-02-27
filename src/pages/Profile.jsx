import axios from 'axios';
import { NavLink, Outlet } from 'react-router-dom';
import SkillTag from '../components/SkillTag';

const subPage = [
  { id: 1, name: 'profile', url: '.' },
  { id: 2, name: 'applied', url: 'applied' },
  { id: 3, name: 'posted', url: 'posted' },
];

// export const loader = async () =>{
//   await axios.get
// }

const Profile = () => {
  return (
    <section className=" align-element mt-20 p-4 mb-4 ">
      <div role="tablist" className="tabs tabs-box">
        {subPage.map((page) => {
          const { id, name, url } = page;
          return (
            <NavLink
              key={id}
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

      <article className="mt-6 px-4 flex flex-col gap-4">
        <h2 className="font-bold mb-2 text-xl">Profile</h2>
        <div className="avatar indicator">
          <span className="indicator-item badge badge-secondary">Online</span>
          <div className=" w-48 rounded-lg">
            <img
              alt="profile picture"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 items-center">
            <h2 className="font-bold text-xl">Micheal Obarewon</h2>
            <div className="badge  badge-soft font-medium text-xs badge-info">
              <svg
                className="size-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  fill="currentColor"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12"
                    cy="7.25"
                    r="1.25"
                    fill="currentColor"
                    strokeWidth="2"
                  ></circle>
                </g>
              </svg>
              Verified
            </div>
          </div>
          <h3 className="font-medium  text-neutral-500 text-sm">
            Software Engineering and Mathematics
          </h3>

          <div className="card-actions">
            <SkillTag skill={'Python'} />
            <SkillTag skill={'API'} />
            <SkillTag skill={'NODE'} />
            <SkillTag skill={'Next.js'} />
            <SkillTag skill={'JavaScript'} />
            <SkillTag skill={'TypeScript'} />
          </div>
          <p className=" textarea-md leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
            sequi ad, consequatur laudantium suscipit aspernatur deleniti
            perferendis. Deleniti, perferendis.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn  btn-soft btn-warning btn-sm">
            Delete Profile
          </button>
          <button className="btn btn-soft btn-secondary btn-sm">
            Edit Profile
          </button>
        </div>
      </article>
      <Outlet />
    </section>
  );
};
export default Profile;
