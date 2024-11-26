import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Root } from 'postcss';
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoute from './Components/Routs/PrivateRoute.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,

    children:[
      {

        path:'/',
        element:<Home></Home>

      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'register',
        element:<Register></Register>
      },

      {
        path:'orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },

      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }

  
    ]

  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>

   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
