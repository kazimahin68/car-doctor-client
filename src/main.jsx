import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './Routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-4/5 mx-auto'>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={Router}></RouterProvider></AuthProvider>
    </React.StrictMode>,
  </div>
)
