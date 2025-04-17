import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'

const router = createBrowserRouter([{

  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/products',
      element:<Product/>
    },
    {
      path:'/cart',
      element:<Cart/>
    }
  ]
}
] )



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
  
)
