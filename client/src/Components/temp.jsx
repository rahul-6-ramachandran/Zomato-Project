import { useLocation } from "react-router-dom"
import Overview from "../Pages/Restaurant/Overview"


function Temp(props) {
  
  const loc = useLocation()
  return (
    <>
    Hello Buddy
   {loc.pathname}
    </>
    
  )
}

export default Temp