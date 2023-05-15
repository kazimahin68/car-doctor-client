import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './Routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-4/5 mx-auto'>
    <React.StrictMode>
      <RouterProvider router={Router}></RouterProvider>
    </React.StrictMode>,
  </div>
)
