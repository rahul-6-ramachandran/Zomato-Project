import RestaurantCards from "../RestaurantCards"
import DiningCarousal from "./DiningCarousal"


function Dining() {
  return (
    <div className="container  md:px-20 md:mx-auto">
      <div className="m-4  text-xl md:text-4xl text-extrabold md:m-3 md:py-4">
        <h2>Collections</h2>
       
      </div>
      <DiningCarousal/>
      <div className="m-4  text-xl md:text-4xl text-extrabold md:m-3 md:py-4">
        <h2>Best Foods in Kochi</h2>
       
      </div>
      </div>
  )
}

export default Dining