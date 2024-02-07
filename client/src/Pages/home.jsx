import { useParams } from "react-router-dom"

import Delivery from "./Delivery"
import Dining from "./Dining"
import NightLife from "./NightLifte"

function Home() {
  const {type } = useParams()
  return (
  <div className="my-5 px-30 mx-auto">
   {type === "Delivery" && <Delivery/>}
   {type === "DiningOut" && <Dining/>}
   {type=== "Nightlife" && <NightLife/>}
     </div>
   
   
  )
}

export default Home