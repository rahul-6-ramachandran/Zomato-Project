import { useParams } from "react-router-dom"

import Delivery from "../Components/Delivery/index"
import Dining from "../Components/Dining/index"
import NightLife from "../Components/NightLifte/index" 


// Redux actions

import { getRestaurant } from "../Redux/Reducer/restaurant/restaurantSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

function Home() {
  const {type } = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getRestaurant())
  },[])
  
  return (
  <div className="my-5 px-30 mx-auto">
   {type === "Delivery" && <Delivery/>}
   {type === "DiningOut" && <Dining/>}
   {type=== "Nightlife" && <NightLife/>}
     </div>
   
   
  )
}

export default Home