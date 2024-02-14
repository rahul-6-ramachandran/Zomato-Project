import { MdOutlineDirections } from "react-icons/md"
import { CiBookmarkPlus } from "react-icons/ci"
import { PiShareFatLight } from "react-icons/pi"
import Navbar from '../Components/Navbar'
import RestaurantGrid from '../Components/restaurant/restaurantgrid'
import RestaurantInfo from '../Components/restaurant/restaurantinfo'
import InfoButtons from "../Components/restaurant/infobuttons"
import TabContainer from "../Components/restaurant/tabs"
import Temp from "../Components/temp"

function Restaurantlayout(props) {
    return (
        <>
            <Navbar />

            <RestaurantGrid images={["https://b.zmtcdn.com/data/pictures/9/19316849/179f84a55b08488f02ead379bb80e7ea.jpeg",
                "https://b.zmtcdn.com/data/pictures/9/19316849/179f84a55b08488f02ead379bb80e7ea.jpeg",
                "https://b.zmtcdn.com/data/pictures/9/19316849/179f84a55b08488f02ead379bb80e7ea.jpeg",
                "https://b.zmtcdn.com/data/pictures/9/19316849/179f84a55b08488f02ead379bb80e7ea.jpeg",
                "https://b.zmtcdn.com/data/pictures/9/19316849/179f84a55b08488f02ead379bb80e7ea.jpeg"]} />

      <div className="z-5 bg-white md:top-0 top-20 sticky">
      <RestaurantInfo name="Thaal Kitchen" rating="4.3" deliveryRating="129K" cuisine="Kerala, South Indian, Chinese, Fast Food, Juices, Shake, Beverages" address="Palarivattom, Kochi" /> 
          <div className="hidden  md:flex flex-wrap gap-2 ">
          <InfoButtons icon={<MdOutlineDirections/>} title="Direction"/>
          <InfoButtons icon={<CiBookmarkPlus/>} title="Bookmark"/>
          <InfoButtons icon={<PiShareFatLight/>} title="Share"/>
          </div>
          
        <div><TabContainer/></div>
        </div>
          {props.children}
       
     

        </>
    )
}

export default Restaurantlayout