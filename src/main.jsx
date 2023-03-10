import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import './index.css'  
import NuevoCliente from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <Index/>,
      loader: clientesLoader
    },
    {
      path:'/Nuevo/Cliente',
      element: <NuevoCliente/>
    } 
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider
        router={router}/>
  </React.StrictMode>,
)






