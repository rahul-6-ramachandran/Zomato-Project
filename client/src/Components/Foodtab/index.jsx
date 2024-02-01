import { TfiBag } from "react-icons/tfi"
import { IoFastFoodOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"
import { LiaAppleAltSolid } from "react-icons/lia"
import { useParams,Link } from "react-router-dom"
import classnames from 'classnames'

const MobileTabs = () => {
    
    const allTypes = [
        {
            id : "DiningOut",
            icon : <TfiBag />,
            
        },
        {
            id : "Delivery",
            icon : <IoFastFoodOutline />,
        
        },
        {
            id : "Nightlife",
            icon :<BiDrink />,
           
        },
        {
            id : "Nutrition",
            icon :<LiaAppleAltSolid />,
          
        },
]
 
const {type} = useParams() 

    return (
    <>
        <div className="lg:hidden md:justify-evenly fixed w-full bg-white z-10 bottom-0 flex items-center justify-between p-3 ">
 
             {allTypes.map((item)=>(
                       <Link to={`/${item.id}`}  key={item.id}>
                        <div className={item.id===type? "flex flex-col items-center text-xl pt-3 text-zomato-600 border-t-2 transition duration-700 ease-in-out shadow-md border-zomato-400": "flex flex-col items-center text-xl"}>

                        <span>{item.icon}</span>
                        <h4 className="text-gray-500 text-lg text-zomato-600">{item.id}</h4>
        
                    </div>
                    </Link>
                    ))
       
                    }

        </div>
    </>)
}

const LargeTabs =()=>{
    const allTypes = [
        {
            id : "DiningOut",
            imageDefault : "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive : "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            activeColor: "blue",
            
        },
        {
            id : "Delivery",
            imageDefault : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive : "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            activeColor: "yellow",
        
        },
        {
            id : "Nightlife",
            imageDefault : "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive : "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            activeColor: "yellow",
           
        },
       
]

const {type} = useParams()
 
    return(
        <>
        <div className="hidden lg:flex gap-16 container px-20 mx-auto py-5 ">
            
            {allTypes.map((item)=>(
                <Link to={`/${item.id}`} key={item.id}>
                  <div className={classnames("flex items-center flex gap-3 transition duration-700 ease-in-out",{
                    "border-b-2 border-zomato-400 pb-4": type === item.id
                  })}>
                  <div className={`${type===item.id ? "w-16 h-16 bg-yellow-100  rounded-full p-3" : " w-16 h-16 bg-gray-100  rounded-full p-3"}`}>
                      <img className="w-full h-full" src={type===item.id ? item.imageActive : item.imageDefault} alt="dining" /></div>
                  <h3 className={classnames("text-xl text-gray-700 font-semibold",{
                    "text-zomato-200": type === item.id
                  })}>{item.id}</h3>
              </div>
              </Link>)
            )} 
        </div>
        </>
        )
            }

        function FoodTab() {
        return (
        <>
            <div >
                <MobileTabs />
                <LargeTabs/>
            </div>
        </>


    )
}

export default FoodTab
