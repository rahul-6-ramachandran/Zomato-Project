import { Outlet } from "react-router-dom";

import RestaurantLayout from "../Layout/Restaurant.layout";
import Temp from "../Components/temp";


// Layout
// import HomeLayout from "../Layout/Home.layout";


const RestaurantLayoutHOC = ()=>{
    return(
        <>
         <div className="container mx-auto px-4 lg:px-20">
      
         <RestaurantLayout><Temp/></RestaurantLayout>
    </div>
                  
            
              
           
        </>
        
    )
}

export default RestaurantLayoutHOC 