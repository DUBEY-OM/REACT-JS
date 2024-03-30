import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([{path:'/',element:<Layout/>,childern:[{path:"",element:<Home/>},{path:"",element:<About/>}]}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
