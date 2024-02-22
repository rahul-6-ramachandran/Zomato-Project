import { useDispatch, useSelector } from "react-redux"
import { FaCaretRight } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import MenuCollection from "../../Components/restaurant/menuCollection"
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard"
import MapView from "../../Components/restaurant/mapView"

import { getReviews } from "../../Redux/Reducer/review/reviewSlice"
import { useEffect, useState } from "react"
import { getImage } from "../../Redux/Reducer/image/imageSlice"


function Overview() {
    const [menuImages,setMenuImages] = useState({images:[]})
    const [reviews,setReviews] = useState([])

    const { id } = useParams()
    const reduxState = useSelector((globalStore)=> globalStore.restaurants.selectedRestaurant)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(reduxState){
            dispatch(getImage(reduxState?.menuImages)).then((data)=>{
                const images = []
                data.payload.image.image.map(({location})=>images.push(location))
                setMenuImages(images)
        })
        dispatch(getReviews(reduxState?._id).then(data => setReviews(data.reviews) ))
        }
       
    },[])

    const getLatLong = (mapAddress)=>{
        return mapAddress?.split(",").map((item)=> parseFloat(item))
    }
    return (
        <>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="bg-white  w-full ">
                    <h2 className="md:text-3xl font-medium text-lg my-5">About this place</h2>
                    <div className="flex flex-wrap justify-between my-4 py-3 items-center">

                        <h4 className="md:text-2xl font-normal text-lg my-3">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}> <span className="text-zomato-300 items-center flex flex-wrap">See all Menus <FaCaretRight /></span></Link>
                    </div>
                    <div className="flex flex-wrap gap-3  ">
                        <MenuCollection images={["https://b.zmtcdn.com/data/menus/430/900430/bcec2c7bd8e28db95e4b0e357c55c5c5.jpg?","https://b.zmtcdn.com/data/menus/430/900430/bcec2c7bd8e28db95e4b0e357c55c5c5.jpg?"]} menuTitle="Menu" pages="3" />
                    </div>
                    <div className="flex flex-col py-5">
                        <h4 className="md:text-2xl font-normal text-lg my-4">Cuisine</h4>
                        <div className="flex flex-wrap">
                            <span className="text-xl font-normal border border-gray-300 py-2 px-3 rounded-full text-cyan-500 font-normal">Kerala</span>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="md:text-2xl font-normal text-lg my-4">Average Cost</h4>

                        <h6 className="font-normal text-gray-500 text-xl">₹500 for two people (approx.)</h6>
                        <small className="text-light font-light text-gray-400">Exclusive of applicable taxes and charges, if any</small>

                    </div>

                    <div className="flex flex-col py-5">
                        <h4 className="md:text-2xl font-normal text-lg my-4">Review Highlights</h4>
                        <div className="flex flex-wrap">
                            <span className="text-xl font-light border border-gray-300 py-2 px-3 rounded-full text-gray-500 font-normal">Kerala</span>
                        </div>
                    </div>
                    <div className=" md:hidden w-full  flex flex-col gap-4">
                    <MapView />

                    </div>
                    {reviews.map((reviewdata)=>(
                    <div key={reviewdata.id} className="flex flex-col gap-8 my-5">
                        <ReviewCard {...reviewdata}/>
                       
                    </div>
                     ))}
                  
                
                    


                </div>


                <aside style={{ height: "fit-content" }}
                    className="hidden md:block md:w-2/5 sticky top-80   p-5 shadow-md rounded-lg"
                >
                    <MapView />
                </aside>
            </div>
           
        </>
    )
}

export default Overview