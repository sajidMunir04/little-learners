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
import './fonts.css';
import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
