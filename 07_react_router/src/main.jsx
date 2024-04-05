import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contactme.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader }from './Components/Github/Github.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// const router=createBrowserRouter([{path:'/',element:<Layout/>,childern:[{path:"",element:<Home/>},{path:"/About",element:<About/>},{path:"/contact",element:<Contact/>}]}])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route LOADER={githubInfoLoader }
      path='github' element={<Github/>} />
   </Route>))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,)
