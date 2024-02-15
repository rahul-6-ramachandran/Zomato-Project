import { Outlet } from "react-router-dom";
import CheckoutLayout from "../Layout/Checkout.Layout";





const CheckoutLayoutHOC = ()=>{
    return(
        <>
        
              <CheckoutLayout/>     
            
                <Outlet/>
           
        </>
        
    )
}

export default CheckoutLayoutHOC