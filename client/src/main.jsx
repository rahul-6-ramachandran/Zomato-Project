import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
  Routes

} from "react-router-dom"
import HomeLayoutHOC from './HOC/Home.Hoc.jsx'
import Master from './Components/master.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantLayoutHOC from './HOC/Restaurant.Hoc.jsx'
import Temp from './Components/temp.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route>


      <Route path="/" element={<HomeLayoutHOC />} >
        <Route
          path="/"
          element={<Navigate to="/Delivery" />}
        />

        <Route path='/:type' element={<Master />} />

      </Route>
      <Route path='/restaurant/:id' element={<RestaurantLayoutHOC />}>
        <Route path='/restaurant/:id/:route' element={<Temp/>}></Route>
      </Route>
    </Route>











  )

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
)
