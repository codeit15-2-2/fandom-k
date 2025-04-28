import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import LandingPage from '@pages/landing-page';
import MainPage from '@pages/main-page';
import DetailPage from '@pages/detail-page';
import MyPage from '@pages/my-page';
import NotFoundPage from '@pages/not-found-page';
import MonthlyChartContent from '@pages/main-page/components/MonthlyChartContent';
import DonationProvider from '@contexts/DonationContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    element: <App />,
    children: [
      {
        path: 'main',
        element: (
          <DonationProvider>
            <MainPage />
          </DonationProvider>
        ),
        children: [
          {
            path: 'female',
            element: <MonthlyChartContent />,
          },
          {
            path: 'male',
            element: <MonthlyChartContent />,
          },
        ],
      },
      {
        path: 'main/:id',
        element: (
          <DonationProvider>
            <DetailPage />
          </DonationProvider>
        ),
      },
      {
        path: 'mypage',
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <MyPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'error/404',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
