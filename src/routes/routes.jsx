import { createBrowserRouter } from 'react-router-dom';
import Posts from '../pages/Posts';
import SinglePost from '../pages/SinglePost';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/post/:id',
    element: <SinglePost />
  }
])

export default router;