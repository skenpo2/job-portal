import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  MyJobs,
  FeaturedJobs,
  Home,
  AppliedJobs,
  PostedJob,
  SingleJob,
  Login,
  Register,
  PostJob,
  EditJob,
  Profile,
} from './pages';

import { loader as HomeLoader } from './pages/FeaturedJobs';
import { loader as SingleJobLoader } from '../src/pages/SingleJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <FeaturedJobs />,
        loader: HomeLoader,
      },
      {
        path: 'myjobs',
        element: <MyJobs />,
        children: [
          {
            index: true,
            element: <AppliedJobs />,
          },
          {
            path: 'posted',
            element: <PostedJob />,
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'jobs/:id',
        element: <SingleJob />,
        loader: SingleJobLoader,
      },

      {
        path: 'postjob',
        element: <PostJob />,
      },
      {
        path: 'editjob/:id',
        element: <EditJob />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
