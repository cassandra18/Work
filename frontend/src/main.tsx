import 'slick-carousel/slick/slick.css?raw';
import 'slick-carousel/slick/slick-theme.css?raw';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/homePage.tsx';
import About from './pages/about.tsx';
import OurProfile from './components/ourProfile';
import OurHistory from './components/ourHistory';
import OurVision from './components/ourVision.tsx';
import Administration from './components/adminComponents/administartion.tsx';
import AboutPolicies from './pages/aboutPolicies.tsx';
import AboutNews from './pages/aboutNews.tsx';
import AboutEvents from './pages/aboutEvents.tsx';
import AboutGames from './pages/aboutGames.tsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: '/about/profile',
            element: <OurProfile/>,
          },
          {
            path: '/about/history',
            element: <OurHistory/>,
          },
          {
            path: '/about/vision',
            element: <OurVision/>
          },
          {
            path: '/about/administration',
            element: <Administration/>
          },
          {
            path: '/about/policies',
            element: <AboutPolicies/>
          },
          {
            path: '/about/news',
            element: <AboutNews/>
          },
          {
            path: '/about/events',
            element: <AboutEvents/>
          },
          {
            path: '/about/games',
            element: <AboutGames/>
          }
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
