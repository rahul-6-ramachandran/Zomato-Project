import { useState,useEffect } from "react"

import ReviewCard from "../../Components/restaurant/Reviews/reviewCard"
import { useDispatch, useSelector } from "react-redux"

import { getReviews } from "../../Redux/Reducer/review/reviewSlice"
import AddreviewCard from "../../Components/restaurant/Reviews/addreviewCard"

function Reviews() {
    const [reviews,setReviews] = useState([])

   
    const reduxState = useSelector((globalStore)=> globalStore.restaurants.selectedRestaurant)
    const dispatch = useDispatch()
    useEffect(()=>{
      if(reduxState){
         
      dispatch(getReviews(reduxState?._id)).then(data =>  setReviews(data.payload.reviews) )
      }
     
  },[])
  return (
   <>
   <div className="flex flex md:flex-row gap-3 ">
   <div className="flex flex-col gap-6 p-4  w-full ">
        {
            reviews?.map((review)=>(
                <ReviewCard key={review.id} {...review}/>
            ))
        }
       
    </div>
    <aside  style={{ height: "fit-content" }}
     className="hidden flex items-start md:block md:w-2/5 sticky top-80   p-5 shadow-md rounded-lg">

        <AddreviewCard/>
            </aside>
   </div>
   
   </>
  )
}

export default Reviews