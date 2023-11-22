import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css'
import FrontPage from './pages/FrontPage/FrontPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage/>
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
