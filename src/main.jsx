import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';

// Configurando Router
import { Initial } from './pages/initial/Initial.jsx';
import { Register } from './pages/register/Register.jsx';
import { Login } from './pages/login/Login.jsx';
import { VideoArea } from './pages/videoArea/VideoArea.jsx';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/videos',
    element: <VideoArea />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
