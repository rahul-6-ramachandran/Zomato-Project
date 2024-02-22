import FoodItem from "./foodItem"
import { getfoodById } from "../../../Redux/Reducer/food/foodSlice"
import { useState } from "react"
function FoodList(props) {


  return (
    <>
     <div >
              <div className="w-full  sticky top-80">
              <h2 className="bg-white  w-full px-4 py-5 text-xl font-semibold">{props.name}</h2>

              </div>
              {
                props.items.map((item)=>(
                    <FoodItem key={item} _id={item}/>
          
                ))
              }
            </div>
    </>
  )
}

export default FoodList