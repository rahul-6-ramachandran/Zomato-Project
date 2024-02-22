import { useState } from "react"
import MenuCategory from "./menuCategory"


function MenuContainer(props) {
 
   
  return (
    <div className="w-full">
        <MenuCategory name={props.name} items={props.items} onClickHandler={props.onClickHandler}  isActive={props.selected===props.name}/>
        

    </div>
  )
}

export default MenuContainer