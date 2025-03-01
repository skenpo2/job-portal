import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
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
import { action as LoginAction } from './pages/Login';
import About from './pages/About';
import ProfileLayout from './pages/ProfileLayout';
import { store } from './store';

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
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'applied',
            element: <AppliedJobs />,
          },
          {
            path: 'posted',
            element: <PostedJob />,
          },
        ],
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
    action: LoginAction(store),
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
