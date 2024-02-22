import ReactStars from 'react-rating-stars-component'
import { FaPlus } from "react-icons/fa6"
import { useEffect, useState } from 'react'
import { getFood } from '../../../Redux/Reducer/food/foodSlice'
import { useDispatch } from 'react-redux'
import { getImage } from '../../../Redux/Reducer/image/imageSlice'


function FoodItem(props) {
  const [food,setFood] = useState({})
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFood(props._id)).then(data=> {
      setFood(data.payload.foods)
      dispatch(getImage(data.payload.foods.photos)).then((data)=>{
        const {images } = data.payload.image
        images.length && 
        setFood((prev)=> ({...prev,image:images[0].location}))
      })
    })
  },[])
  
  return (
    <>{
      food?.name &&
    
      <div className="flex md:m-4 items-center">
       { food?.image &&
         <div className="md:w-44 md:h-40  w-2/4 h-2/6 rounded-xl" >   
         <img className="w-full h-full rounded-xl"  src={food?.image}alt="" />
     </div>
       }
        <div className=" flex flex-col gap-1 md:gap-2 px-2 md:px-4 py-1">
            <h3 className=" md:text-2xl font-medium">{food?.name}</h3>
            <p className="text-gray-500 font-regular md:text-xl">{food?.price}</p>
            <ReactStars count={5} value={food?.rating || 0 }/>
            <p className="text-gray-500 font-regular md:text-xl">{food?.descript}</p>
        </div>
        <div className='border border-2 py-2 px-1 border-zomato-200 rounded-2xl' >
          <button className='flex items-center gap-1 text-zomato-300'>Add <FaPlus/></button>
        </div>

      </div>
  
      }</>
    
  )
}

export default FoodItem