import { Outlet } from "react-router-dom";

import RestaurantLayout from "../Layout/Restaurant.layout";


// Layout
// import HomeLayout from "../Layout/Home.layout";


const RestaurantLayoutHOC = ()=>{
    return(
        <>
         <div className="container mx-auto px-4 lg:px-20">
      
         <RestaurantLayout/> 
    </div>
                  
            
              
           
        </>
        
    )
}

export default RestaurantLayoutHOC 