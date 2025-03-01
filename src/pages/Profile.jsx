import SkillTag from '../components/SkillTag';

// export const loader = async () =>{
//   await axios.get
// }

const Profile = () => {
  return (
    <section className="">
      <article className="mt-6 px-4 flex flex-col gap-4">
        <h2 className="font-bold mb-2 text-xl">Profile</h2>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
    </section>
  );
};
export default Profile;
