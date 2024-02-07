// Components
import { useState } from "react"
import RestaurantCards from "../RestaurantCards"
import Brand from "./Brand"
import DeliveryCarousals from "./DeliveryCarousals"
function Delivery() {
    const [restaurantList,setRestaurantList] = useState([
        {
            id:123556,
            photos : ["https://b.zmtcdn.com/data/pictures/6/19008406/2137031075da5e1625f5e0ebc54fb78f_o2_featured_v2.jpeg?output-format=webp"],
            cuisine : ["Biryani", "Kerala", "South Indian", "Arabian", "Shake", "Juices"],
            name : "Mehfil Biriyani",
            averageCost : 100,
            isOff : 80,
            duration : 16,
            rating : 4.1


        },
        
    ])
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