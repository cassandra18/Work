import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/homePage.tsx';
import About from './pages/about.tsx';
import OurProfile from './components/ourProfile';
import OurHistory from './components/ourHistory';

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
