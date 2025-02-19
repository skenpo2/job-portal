import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';

const JobList = () => {
  const jobs = useLoaderData();

  if (!jobs.length) {
    return <h1>No job</h1>;
  }
  return (
    <div className="align-element mt-6  py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2 bg-base-200 md:rounded-xl lg:rounded-xl">
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
      <JobCard />
    </div>
  );
};
export default JobList;
