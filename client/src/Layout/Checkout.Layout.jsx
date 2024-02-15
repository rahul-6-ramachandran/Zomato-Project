import CheckoutNavbar from "../Components/Navbar/checkoutNavbar"
import Checkout from "../Pages/checkout"


function CheckoutLayout(props) {
  return (
    <>
    
    <div className="container mx-auto px-4 lg:px-20 ">
    <CheckoutNavbar/>
       <Checkout/>
        </div>
    </>
  
  )
}

export default CheckoutLayout