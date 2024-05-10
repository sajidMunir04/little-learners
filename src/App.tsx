import './fonts.css';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Home from './pages/Home';
import StudentLife from './pages/StudentLife';
function App() {
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

  return (<>
    <RouterProvider router={router}/>
  </>);
}

export default App;
