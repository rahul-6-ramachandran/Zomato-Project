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
import Overview from './Pages/Restaurant/Overview.jsx'
import OrderOnline from './Pages/Restaurant/OrderOnline.jsx'
import Reviews from './Pages/Restaurant/Reviews.jsx'
import Menu from './Pages/Restaurant/Menu.jsx'
import Photos from './Pages/Restaurant/Photos.jsx'
import Checkout from './Pages/checkout.jsx'
import CheckoutLayoutHOC from './HOC/Checkout.HOC.jsx'
import Redirectrestaurant from './Pages/Restaurant/Redirect.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import axios from 'axios'

if(localStorage.zomatoUser){
  const {token } = JSON.parse(localStorage.zomatoUser)
  axios.defaults.headers.common["Authorization"]= `Bearer ${token}`
}
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
      <Route path='/restaurant/:id' element={<RestaurantLayoutHOC/>} >
      <Route
        path="/restaurant/:id"
        element={<Redirectrestaurant/>}
    />
        <Route index path='/restaurant/:id/overview' element={<Overview />} />
        <Route path='/restaurant/:id/reviews' element={<Reviews/>} />
        <Route path='/restaurant/:id/order' element={<OrderOnline/>}/>

        <Route path='/restaurant/:id/menu' element={<Menu/>}/> 
        <Route path='/restaurant/:id/photos' element={<Photos/>} /> 
        </Route>
        <Route path='/checkout' element={<CheckoutLayoutHOC/>}>
           
        </Route>
        {/* />
      
         
        */}

        
        {/* </Route> */}

      </Route>
   











      )

      )
      ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
        

      </React.StrictMode>
      )
