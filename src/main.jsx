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