import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ratings from './components/ratings/ratings';
import Culture from './components/culture/culture';
import Infrastructure from './components/infrastructure/infrastructure';
import Hostel from './components/hostel/hostel';
import LoginPage from './components/loginpage/loginPage';
import Profile from './components/profile/profile';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Summary from './components/summary/summary';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/ratings",
    element:<Ratings dept="Staff" dept_check_1='student treatment' dept_check_3='text book use' dept_check_2='level of difficulty' dept_check_4="Attendance" route='/culture'/>
  },
  {
    path:"/culture",
    element:<Culture/>
  },
  {
    path:"/hostel",
    element:<Hostel/>
  },
  {
    path:"/infrastructure",
    element:<Infrastructure/>
  },
  {
    path:"/summary",
    element:<Summary/>
  },
  {
    path:"/loginpage",
    element:<LoginPage/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);


reportWebVitals();
