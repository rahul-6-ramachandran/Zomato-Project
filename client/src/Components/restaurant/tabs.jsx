import { useLocation } from "react-router-dom"
import { useParams,Link } from "react-router-dom"
import classnames from "classnames"

const Tabs = (props)=>{
    const {id} = useParams()
    return(
        <>
        <Link to={`/restaurant/${id}/${props.path}`}>
        <div className={classnames("text-gray-500  text-2xl font-Regular p-4 items-center ",
        {"text-zomato-300 font-semibold border-b-2 border-zomato-400 transition duration-700 ease-in-out" : props.isActive})}>

          <h3>{props.title}</h3>  
            </div>
            </Link>
            </>
    )
}


function TabContainer() {
    const location = useLocation()
    const currentLocation = location.pathname
    const tabs=[{
        title:"Overview",
        path: "overview",
        isActive : currentLocation.includes('overview')
    },
    {
        title:"Order Online",
        path: "order",
        isActive : currentLocation.includes('order')
    },
    {
        title:"Reviews",
        path: "reviews",
        isActive : currentLocation.includes('reviews')
    },
    {
        title:"Photos",
        path: "photos",
        isActive : currentLocation.includes('photos')
    },
    {
        title:"Menu",
        path: "menu",
        isActive : currentLocation.includes('menu')
    },
    {
        title:"Book a Table",
        path: "book",
        isActive : currentLocation.includes('book')
    }
]
    
  return (
    <>
       <div  className="flex items-center gap-3 overflow-x-scroll md:gap-12 ">
        {
            tabs.map((tab)=>(
             
                  <Tabs key={`123${tab.title}`} {...tab}/>
                  
            ))
        }
          </div>

    
    </>
  )
}

export default TabContainer