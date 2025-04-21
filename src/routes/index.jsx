import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import LandingPage from '@pages/landing-page';
import MainPage from '@pages/main-page';
import DetailPage from '@pages/detail-page';
import MyPage from '@pages/my-page';
import NotFoundPage from '@pages/not-found-page';
import Content from '@pages/main-page/pages/Content';

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
            element: <Content />,
          },
          {
            path: 'male',
            element: <Content />,
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
