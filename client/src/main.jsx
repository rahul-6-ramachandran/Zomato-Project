import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
} from "react-router-dom"
import Temp from './Components/temp.jsx'
import HomeLayoutHOC from './HOC/Home.Hoc.jsx'



const router = createBrowserRouter(

  createRoutesFromElements (
    
    <Route path="/" element={<HomeLayoutHOC/>} >
      <Route index element={< Temp/>} />
      
    </Route>
  
    
      
      


      )
      
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
