import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,Contact, User, Github, Textonly } from './Component/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
     <Route path='' element={<Home/>}/>
     <Route path='text-only' element={<Textonly/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:userid' element={<User/>}/>
     <Route path='github' element={<Github/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/> 
  </React.StrictMode>,
)
