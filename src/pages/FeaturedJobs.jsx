import { Outlet } from 'react-router-dom';
import Search from '../components/Search';
import axios from 'axios';
import JobList from '../components/JobList';

export const loader = async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs/verified');
    console.log(response.data.verifiedJobs);
    return response.data.verifiedJobs;
  } catch (error) {
    console.log(error);
  }
};
const FeaturedJobs = () => {
  return (
    <div>
      <Search />
      <Outlet />
      <JobList />
    </div>
  );
};
export default FeaturedJobs;
