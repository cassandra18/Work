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
import AboutClubsAndSocieties from './pages/aboutClubsandSocieties.tsx';
import AboutFacilities from './pages/aboutFacilities.tsx';
import AboutResults from './pages/aboutResults.tsx';
import AboutDepartments from './pages/aboutDepartments.tsx';
import Admissions from './pages/admissionsPage.tsx';
import AdmissionsOverview from './pages/admissionsOverview.tsx';
import AdmissionCriteria from './pages/admissionCriteria.tsx';
import KeyDatesFees from './pages/admissionsTermdates&Fees.tsx';
import HowToApply from './pages/howToApply.tsx';
import Gallery from './pages/gallery.tsx';
import ContactPage from './pages/contact.tsx';


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
          },
          {
            path: '/about/clubs',
            element: <AboutClubsAndSocieties/>
          },
          {
            path: '/about/facilities',
            element: <AboutFacilities/>
          },
          {
            path: '/about/results',
            element: <AboutResults/>
          },
          {
            path: '/about/departments',
            element: <AboutDepartments/>
          }
        ]
      },
      {
        path: '/admission',
        element: <Admissions />,
        children: [
          {
            path: '/admission/overview',
            element: <AdmissionsOverview />,
          },
          {
            path: '/admission/criteria',
            element: <AdmissionCriteria />,
          },
          {
            path: '/admission/term-dates',
            element: <KeyDatesFees />,
          },
          {
            path: '/admission/apply',
            element: <HowToApply />,
          }
        ]
      },
      {
        path: '/gallery',
        element: <Gallery />,
      }, 
      {
        path: '/contact',
        element: <ContactPage />,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
