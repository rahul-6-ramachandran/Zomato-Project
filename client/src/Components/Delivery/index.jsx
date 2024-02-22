// Components
import { useEffect, useState } from "react"
import RestaurantCards from "../RestaurantCards"
import Brand from "./Brand"
import DeliveryCarousals from "./DeliveryCarousals"
import { useSelector } from "react-redux"
function Delivery() {
    const [restaurantList,setRestaurantList] = useState([])
    const reduxState = useSelector((globalStore)=> globalStore.restaurants.restaurants)
    console.log(reduxState)
    useEffect(()=>{
        reduxState.restaurants && setRestaurantList(reduxState.restaurants)
    },[reduxState.restaurants])
  return (
    <div className="container  md:px-20 md:mx-auto">
        <DeliveryCarousals/>
        <Brand/>
        <div className="flex flex-col  justify-between">
        <div className='flex flex-wrap  md:mt-5 '>
            {restaurantList.map((restaurant)=>(
                    <RestaurantCards  key={restaurant.id} {...restaurant}/>
            ))
        
            }
        </div>
        </div>
        
    </div>
  )
}

export default Delivery