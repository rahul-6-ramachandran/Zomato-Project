import { FaUserLarge, FaLocationDot } from "react-icons/fa6"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdOutlineArrowDropUp } from "react-icons/md"
import { CiSearch } from "react-icons/ci"
const MediumNav = () => {
    return (<>
        <div className="hidden md:flex lg:hidden gap-2">
            <div className="w-36 p-3" >
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full" />
            </div>
            <div className="w-full flex items-center shadow-md bg-white p-3 border border-gray-200 gap-3">
                <div className=" flex gap-2 w-full item-center border-r-2 border-gray-300 pr-2">
                    <span className="text-zomato-400 text-xl"><FaLocationDot /></span>
                    <input type="text" 
                     className= "w-full focus:outline-none"
                     placeholder="Kochi,Kerala" />
                    <IoMdArrowDropdown />

                    {/* <MdOutlineArrowDropUp /> */}

                </div>
                <div className="flex gap-2 item-center">
                    <span className="text-xl"><CiSearch /></span>
                    <input type="search" 
                    className= "w-full focus:outline-none"
                    placeholder="Search for Restaurants,Cuisine or a Dish" />
                </div>
            </div>
            <div className="flex gap-3">
                <button className="text-gray-500 hover:text-gray-800 text-xl">Login</button>
                <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
            </div>
            </div>
        </>)
}
const MobileNav = ()=>{
    return(
        <>
            <div className="flex items-center justify-between">
                <div className="w-28 p-2" >
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full" />
                </div>
                <div className="flex item-center gap-3">
                    <button className="bg-zomato-400 text-white rounded-full p-2">Use App</button>
                    <span className="border rounded-full p-3 text-zomato-400 border-gray-400"><FaUserLarge /></span>
                </div>
            </div>

        </>
        )
}
const LargeNav = () => {
    return (<>
    <div className="container px-20 mx-auto">
        <div className="hidden lg:flex lg:w-3/4 gap-2 justify-between">
            <div className="w-32 p-2" >
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full" />
            </div>
            <div className="w-full flex items-center shadow-md bg-white p-3 border border-gray-200 gap-3">
                <div className=" flex gap-2 item-center border-r-2 border-gray-300 pr-2 w-full">
                    <span className="text-zomato-400 text-xl"><FaLocationDot /></span>
                    <input type="text"
                    className="w-full focus:outline-none"
                     placeholder="Kochi,Kerala" />
                    <IoMdArrowDropdown />

                    {/* <MdOutlineArrowDropUp /> */}

                </div>
                <div className="flex gap-2 item-center w-full">
                    <span className="text-xl"><CiSearch /></span>
                    <input type="search" 
                    className="focus:outline-none w-full"
                    placeholder="Search for Restaurants,Cuisine or a Dish" />
                </div>
            </div>
            <div className="flex gap-3">
                <button className="text-gray-500 hover:text-gray-800 text-xl">Login</button>
                <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
            </div>
            </div>
            </div>
        </>)
}



        function Navbar() {
  return (
        <>
            <nav className="px-4 py-4  items-center w-full bg-white shadow-md">
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <MediumNav />
                <LargeNav/>
            </nav>

        </>

        )
}

        export default Navbar