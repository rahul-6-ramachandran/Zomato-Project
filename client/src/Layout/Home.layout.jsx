import Navbar from "../Components/Navbar"
import FoodTab from "../Components/Foodtab"
function HomeLayout(props) {
  return (
    <><Navbar/>
    <FoodTab/>
    <div className="container mx-auto px-4 lg:px-20">
      
      {/* {props.children} */}
    </div>
    </>
    
  )
}

export default HomeLayout