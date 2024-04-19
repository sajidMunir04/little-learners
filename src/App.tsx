
import './fonts.css';
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';

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
  </>);
}

export default App;
