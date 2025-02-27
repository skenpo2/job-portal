import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import SkillTag from '../components/SkillTag';
import jobapi from '../assets/jobapi.jpg';
import { useState } from 'react';

export const loader = async ({ params }) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/job/verified/${params.id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const SingleJob = () => {
  const job = useLoaderData();
  const [readMore, setReadMore] = useState(false);

  if (!job) {
    return <h1>No available</h1>;
  }

  const {
    title,
    description,
    company,
    salary,
    _id,
    skills = [],
    applicants,
    image,
  } = job;

  return (
    <section className="align-element mt-14 py-8 mb-6 flex  flex-col gap-1">
      <div className="flex flex-col justify-between gap-4 py-6 border-b-2 border-b-base-200">
        <img className="size-24 rounded-lg" src={jobapi} alt={title} />
        <h1 className="text-xl font-bold">{title}</h1>
        <h4 className="text-secondary font-semibold text-sm">{company}</h4>
        <div className="badge badge-md font-medium text-xs badge-soft rounded-full badge-accent ">{`+${applicants.length} Applicants`}</div>
      </div>
      <div className="flex flex-col justify-between gap-2 py-6 border-b-2 border-b-base-200">
        <h2 className="text-lg font-bold">Description</h2>
        <p className="text-sm font-medium">
          {readMore ? description : `${description.substring(0, 150)}... `}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-xs font-normal cursor-pointer underline text-accent"
          >
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>
      </div>
      <div className="flex flex-col justify-between  py-6  gap-2 border-b-2 border-b-base-200">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="card-actions">
          {skills?.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between py-6 gap-2">
        <h2 className="text-lg font-bold">Based Salary</h2>
        <p className="text-sm font-semibold">{salary}</p>
      </div>
      <div className="grid place-items-center">
        <button className="btn  btn-secondary btn-block md:btn-wide">
          Apply Now
        </button>
      </div>
    </section>
  );
};
export default SingleJob;
