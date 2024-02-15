import FoodCart from "../Components/Cart/FoodCart"
import AddressList from "../Components/Checkout/addressList"
import { GoShieldLock } from "react-icons/go";

function Checkout() {
    const address = [{
        name: "Home",
        address:"India"
    ,},
    {
        name: "Home",
        address:"India"
    },
    {
        name: "Home",
        address:"India"
    },
    {
        name: "Home",
        address:"India"
    }]
  return (
    <div className="my-5 flex flex-col gap-3 items-center">
        <h1 className="text-xl md:text-2xl text-center  font-semibold">Checkout</h1>
        <div className="flex flex-col items-center rounded-lg shadow-lg  py-3 w-full md:w-3/5">
        <h3 className="text-lg font-semibold ">Summary</h3>
        <div  className="flex w-full flex-col items-center gap-2"> 
          <h4 className="text-lg tracking-wider"> Order From</h4> 
          <div className="flex w-full flex-col items-center text-gray-500">
          <h4>Domino's Pizza</h4>
          <small>GT World Mall, Magadi Road, Kochi</small>
          </div>
            <div className="my-4 flex flex-col gap-2 w-full md:w-3/5">
                <FoodCart name="Pizza" quantity={3} price={300}/>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-3/5 my-4">
                <h4 className="text-xl font-semibold text-center">Choose Address</h4>
            <AddressList  address={address}/>
               
            </div>
            <button className="w-full flex items-center gap-3 justify-center px-4 md:w-4/5 px-0 my-4 md:my-8  h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
            Pay Securely <GoShieldLock/>
        </button>
        </div>
     
        </div>
        
    </div>
  )
}

export default Checkout