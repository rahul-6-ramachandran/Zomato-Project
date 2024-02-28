import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom'
import { postReviews } from '../../../Redux/Reducer/review/reviewSlice'
import { useDispatch } from 'react-redux'

export default function ReviewModal({ isOpen, setIsOpen, ...props }) {
    const [reviewdata,setReviewData] = useState({
        subject : "",
        reviewText : "",
        isRestaurantReview : false,
        isFoodReview : false,
        rating : 0
    })

    const { id } = useParams()

    const dispatch = useDispatch()

    const handleChange = (e)=> setReviewData((prev)=> ({...prev,[e.target.id]:e.target.value}))

    const toggleDining = ()=>{
        setReviewData((prev)=>({...prev,isFoodReview:false,isRestaurantReview: !reviewdata.isRestaurantReview}))
    }

    const toggleDelivery = ()=>{
        setReviewData((prev)=>({...prev,isFoodReview: !reviewdata.isFoodReview,isRestaurantReview:false}))
    }

    const handleRating = (rating)=> setReviewData((prev)=>({...prev,rating}))

    function closeModal() {
        setIsOpen(false)
    }

    const submit = ()=> {dispatch(postReviews({
        ...reviewdata,
        restaurant : id
    }))
    setReviewData({
        subject : "",
        reviewText : "",
        isRestaurantReview : false,
        isFoodReview : false,
        rating : 0
    })

    closeModal()
 }

   

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Review
                                    </Dialog.Title>
                                    <div className="mt-2  flex items-center">
                                        <div className="flex w-full flex-col items-center gap-3">
                                            <div className="flex items-center gap-3">

                                                <input type="radio" name="review"  onChange={toggleDining} checked={reviewdata.isRestaurantReview} id="dining" />
                                                <label htmlFor="dining">Dining</label>
                                                <input type="radio" onChange={toggleDelivery} checked={reviewdata.isFoodReview} name="review" id="delivery" />
                                                <label htmlFor="delivery">Delivery</label>
                                            </div>
                                            
                                              

                                           
                                            <div>
                                                <ReactStars count={5} onChange={handleRating} value={reviewdata.rating} size={24} />
                                            </div>
                                            <form action="" className='w-full '>
                                                <div className='flex w-full flex-col gap-2 p-3'>
                                                    <label  htmlFor="">Subject</label>
                                                    <input type="text" value={reviewdata.subject} onChange={handleChange} className='w-full rounded-md border p-2 border-gray-400 focus:outline-none focus:border-zomato-500' id='subject' placeholder='amazing food' />
                                                </div>
                                                <div className='flex flex-col gap-2 p-3'>
                                                    <label htmlFor="reviewText">Review Text</label>
                                                    <textarea type="text" value={reviewdata.reviewText} onChange={handleChange} className='w-full border p-2 rounded-md border-gray-400 focus:outline-none focus:border-zomato-500' id='reviewText' placeholder='amazing food' rows={5}  />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-zomato-300 px-4 py-2 text-sm font-medium text-white hover:bg-zomato-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={submit}
                                            // onSubmit={submit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
