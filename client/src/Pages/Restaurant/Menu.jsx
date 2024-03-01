import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImage } from "../../Redux/Reducer/image/imageSlice"

import MenuCollection from "../../Components/restaurant/menuCollection"



function Menu() {
    const [menus,setMenu] = useState([])
    const reduxState = useSelector((globalStore)=> globalStore.restaurants.selectedRestaurant)
    const dispatch = useDispatch()
    useEffect(()=>{
      if(reduxState){
          dispatch(getImage(reduxState?.menuImages)).then((data)=>{
              const images = []
              data.payload.images.images.map(({location})=>images.push(location))
              setMenu(images)
      })
      }
     
  },[])
  return (
    <div className="flex flex-wrap gap-3">
        {
           <MenuCollection   images={menus} menuTitle="Menu" pages={menus.length}/>
        }
    </div>
  )
}

export default Menu