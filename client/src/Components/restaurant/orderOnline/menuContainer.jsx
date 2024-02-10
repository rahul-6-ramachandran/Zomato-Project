import { useState } from "react"
import MenuCategory from "./menuCategory"


function MenuContainer(props) {
    const [selected,setSelected] = useState("")
    const onClickHandler = (e)=>{
        if(e.target.id){
            setSelected(e.target.id)
        }
        return
    }
  return (
    <div className="w-full">
        <MenuCategory name="Recommended" items={["",""]} onClickHandler={onClickHandler}  isActive={selected==="Recommended"}/>
        

    </div>
  )
}

export default MenuContainer