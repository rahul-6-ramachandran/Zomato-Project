import { useState } from "react"
import { RiArrowUpSFill, RiArrowRightSFill } from "react-icons/ri"
import FoodCart from "./FoodCart"
import { IoClose } from "react-icons/io5"

function CartContainer() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{ setIsOpen((prev)=>!prev)

     } 
     const closeTab = ()=> setIsOpen(false)
    return (
        <>
        
        {
            isOpen && 
            <div className="md:hidden fixed overflow-y-scroll w-full items-center bg-white  bottom-16 z-10 h-60">
        <div className="sticky top-0 bg-white flex justify-between p-4 items-center text-2xl">
            <h3 className=" font-semibold">Your Order</h3>
            <IoClose onClick={closeTab}/>
            </div>  
        <FoodCart name="Pizza" price="300" quantity="3"/>
        <FoodCart name="Pizza" price="300" quantity="3"/>
        <FoodCart name="Pizza" price="300" quantity="3"/>
        </div>
        }
            <div className="md:hidden flex items-center justify-between">
                <div className="fixed w-full bg-white z-10 p-2 bottom-0 flex justify-between">
                    <div className="flex flex-col items-start ">
                        <small className="flex items-center gap-1 text-lg" onClick={toggle}>1 item <RiArrowUpSFill /></small>
                        <h4 className="text-xl font-semibold flex items-center gap-2">₹300 <sub>(plus tax)</sub></h4>
                    </div>
                    <div></div>
                    <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg mx-3 text-white">Continue <RiArrowRightSFill /></button>
                </div>

            </div>

        </>

    )
}

export default CartContainer