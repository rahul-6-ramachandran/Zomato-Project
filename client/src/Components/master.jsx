import { useParams } from "react-router-dom"

import Delivery from "./Delivery"

function Master() {
  const {type } = useParams()
  return (
  <div className="my-5 px-30 mx-auto">
   {type === "Delivery" && <Delivery/>}
     </div>
   
   
  )
}

export default Master