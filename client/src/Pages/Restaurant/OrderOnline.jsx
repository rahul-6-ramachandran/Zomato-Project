import MenuContainer from "../../Components/restaurant/orderOnline/menuContainer"
import { useDispatch, useSelector } from "react-redux"
import { IoCompassOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import FoodItem from "../../Components/restaurant/orderOnline/foodItem"
import FoodList from "../../Components/restaurant/orderOnline/foodList"
import { getFood } from "../../Redux/Reducer/food/foodSlice"
import { useEffect, useState } from "react"
function OrderOnline() {

  const [menu,setMenu] = useState([])
  const [selected,setSelected] = useState("")
  const onClickHandler = (e)=>{
    if(e.target.id){
        setSelected(e.target.id)
    }
    return
}
  const reduxState = useSelector((globalStore)=> globalStore.restaurants.selectedRestaurant.restaurant)
  const dispatch = useDispatch()

  useEffect(()=>{
    reduxState && dispatch(getFood(reduxState.menu)).then(data=> setMenu(data.payload.menus.menus))
  },[reduxState])

  return (
    <>
      <div className="w-full mt-4 flex ">
        <aside className="hidden md:flex flex-col w-1/5 sticky top-96 -z-20 border-r border-gray-200 h-screen py-5">

         {
          menu.map((item)=>{
            <MenuContainer {...item} key={item.id} onClickHandler={onClickHandler} selected={selected}/>
          })
         }

        </aside>
        <div className="w-full md:m-4 flex flex-col md:gap-4  gap-2 ">
          <h2 className="text-3xl font-semibold md:mx-2">Order Online</h2>
          <div className="flex ">
            <p className="flex items-center gap-2 text-lg font-light text-gray-500 md:mx-2"><IoCompassOutline />Live track your order | <GoClock />27 min</p>
          </div>
          <section >
           {
            menu.map((item)=>(
              <FoodList title="Recommended" key={item.id} {...item}/>
            ))
           }
          </section>



        </div>


      </div>
    </>

  )
}

export default OrderOnline