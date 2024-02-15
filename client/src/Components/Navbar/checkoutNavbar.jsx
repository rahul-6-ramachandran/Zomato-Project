import { FaUserLarge } from "react-icons/fa6"


function CheckoutNavbar() {
return (
<>
<div className="flex items-center justify-between">
                <div className="w-28 p-2" >
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full" />
                </div>
                <div className="flex item-center gap-3 relative">
                    <span onClick={()=> setISDropDownOpen(prev => !prev)} className="flex items-center gap-2 border rounded-full p-3 text-zomato-400 border-gray-400"><FaUserLarge />Rahul</span>
                    
                </div>
            </div>

</>

)
}

export default CheckoutNavbar