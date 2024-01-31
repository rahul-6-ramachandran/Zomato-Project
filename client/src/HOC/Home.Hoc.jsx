import { Outlet } from "react-router-dom";
import HomeLayout from "../Layout/Home.layout";


// Layout
// import HomeLayout from "../Layout/Home.layout";


const HomeLayoutHOC = ()=>{
    return(
        <>
        
              <HomeLayout/>     
            
                <Outlet/>
           
        </>
        
    )
}

export default HomeLayoutHOC