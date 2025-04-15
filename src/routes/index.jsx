import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from '@layouts/GlobalLayout';
import LandingPage from '@pages/LadingPage';
import MainPage from '@pages/MainPage';
import DetailPage from '@pages/DetailPage';
import MyPage from '@pages/MyPage';
import NotFoundPage from '@pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'main/:id',
        element: <DetailPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
