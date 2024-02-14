import { useState } from "react"
import MenuCollection from "../../Components/restaurant/menuCollection"



function Menu() {
    const [menus,setMenu] = useState([])
  return (
    <div className="flex flex-wrap gap-3">
        {
            menus.map((menu)=> <MenuCollection  key={menu.id} {...menu}/>)
        }
    </div>
  )
}

export default Menu