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
import HomeLayoutHOC from './HOC/Home.Hoc.jsx'
import Master from './Components/master.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const router = createBrowserRouter(

  createRoutesFromElements (
    
    <Route path="/" element={<HomeLayoutHOC/>} >
      <Route path='/:type' exact element={<Master/>}/>
      
    </Route>
  
    
      
      


      )
      
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
