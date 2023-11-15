import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css'
import FrontPage from './pages/FrontPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='bg-image'><FrontPage/></div>
  },
  {
    path: "/login",
    element: <div>Login Page</div>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
