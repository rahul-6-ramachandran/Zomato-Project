import { useState,useEffect } from "react"
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard"
import { useDispatch, useSelector } from "react-redux"

import { getReviews } from "../../Redux/Reducer/review/reviewSlice"

function Reviews() {
    const [reviews,setReviews] = useState([])
    const reduxState = useSelector((globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant)
    const dispatch = useDispatch()
    useEffect(()=>{
      if(reduxState){
         
      dispatch(getReviews(reduxState?._id).then(data => setReviews(data.reviews) ))
      }
     
  },[])
  return (
    <div className="flex flex-col gap-6 p-4">
        {
            reviews.map((review)=>(
                <ReviewCard key={review.id} {...review}/>
            ))
        }
       
    </div>
  )
}

export default Reviews