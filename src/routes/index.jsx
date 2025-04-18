import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import LandingPage from '@pages/landing-page';
import MainPage from '@pages/main-page';
import DetailPage from '@pages/detail-page';
import MyPage from '@pages/my-page';
import NotFoundPage from '@pages/not-found-page';
import Female from '@pages/main-page/Female';
import Male from '@pages/main-page/pages/Male';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
        children: [
          {
            path: 'female',
            element: <Female />,
          },
          {
            path: 'male',
            element: <Male />,
          },
        ],
      },
      {
        path: 'main/:id',
        element: <DetailPage />,
      },
      {
        path: 'mypage',
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
