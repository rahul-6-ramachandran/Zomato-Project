import { Outlet,useLocation, useParams } from "react-router-dom";

import RestaurantLayout from "../Layout/Restaurant.layout";
import Temp from "../Components/temp";
import Overview from "../Pages/Restaurant/Overview";


// Layout
// import HomeLayout from "../Layout/Home.layout";


const RestaurantLayoutHOC = ()=>{
    const {id} = useParams
  
    return(
        <>
         <div className="container mx-auto px-4 lg:px-20">
      
         <RestaurantLayout>
            
      
            </RestaurantLayout>
            <Outlet/>
         
    </div>
                  
            
              
           
        </>
        
    )
}

export default RestaurantLayoutHOC 