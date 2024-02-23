import ReviewModal from './reviewModel'
import { useState } from 'react'



function AddreviewCard() {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModel = ()=> setIsOpen(true)
  return (
   <>
   <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
   <h3 className="text-xl text-medium">Rate your Experience for</h3>
        <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
           
          <input type="radio" name="review" id="dining"/>
          <label htmlFor="dining">Dining</label>
          </div>
          <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>

          </div>
          
        </div>
      
          <button onClick={openModel} className="text-zomato-400">Write a review </button>
   </>
  )
}

export default AddreviewCard