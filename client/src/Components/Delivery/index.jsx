// Components
import RestaurantCards from "../RestaurantCards"
import Brand from "./Brand"
import DeliveryCarousals from "./DeliveryCarousals"
function Delivery() {
  return (
    <div className="container  md:px-20 md:mx-auto">
        <DeliveryCarousals/>
        <Brand/>
        <RestaurantCards/>
    </div>
  )
}

export default Delivery