import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../component/Home'
import '../App.css'

const router = createBrowserRouter([
    {
        path: '',
        element: <Home/>
    }
])


function Router() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
