import jobapi from '../assets/jobapi.jpg';
import SkillTag from './SkillTag';

const JobCard = ({
  title,
  salary,
  company,
  skills = [], // Default to an empty array to prevent errors
  createdAt,
}) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body  flex-col gap-6 justify-between">
        <div className="flex gap-4 justify-between items-start ">
          <div className="flex  justify-between items-start lg:w-[70%] gap-1">
            <div className="w-2/6">
              <img
                className=" w-10 h-10 object-cover rounded-lg"
                src={jobapi}
                alt="Job Image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-sm lg:text-lg ">{title}</h2>
              <p className="text-xs font-md text-neutral-content">{company}</p>
            </div>
          </div>
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
        <div className="card-actions">
          {skills?.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="flex px-8 font-medium text-sm pb-4 justify-between">
        <p className="text-xs ">{salary}</p>
        <p className="text-xs font-md text-neutral-500">{createdAt}</p>
      </div>
    </div>
  );
};

export default JobCard;
