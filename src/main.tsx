import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.tsx';
import Academics from './pages/Academics.tsx';
import Admission from './pages/Admission.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import StudentLife from './pages/StudentLife.tsx';
import './App.css';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/> 
  },
  {
      path: "/about",
      element: <About/>
  },
  {
    path: "/academics",
    element: <Academics/>  
  },
  {
    path: "/admissions",
    element: <Admission/>  
  },
  {
    path: "/studentlife",
    element: <StudentLife/>  
  },
  {
    path: "/contact",
    element: <Contact/>  
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
