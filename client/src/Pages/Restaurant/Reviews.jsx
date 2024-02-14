import { useState } from "react"
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard"


function Reviews() {
    const [reviews,setReviews] = useState(["sedrgse","sdfgsdfgh","sdfgdsf","sdfgdsfg"])
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