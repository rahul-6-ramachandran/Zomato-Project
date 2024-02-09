import { FaCaretRight } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import MenuCollection from "../../Components/restaurant/menuCollection"
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard"
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
function Overview() {
    const { id } = useParams()
    return (
        <>
            <div className="flex flex-col md:flex-row relative gap-3">
                <div className="bg-white  w-full ">
                    <h2 className="md:text-3xl font-medium text-lg my-5">About this place</h2>
                    <div className="flex flex-wrap justify-between my-4 py-3 items-center">

                        <h4 className="md:text-2xl font-normal text-lg my-3">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}> <span className="text-zomato-300 items-center flex flex-wrap">See all Menus <FaCaretRight /></span></Link>
                    </div>
                    <div className="flex flex-wrap gap-3 ">
                        <MenuCollection image="https://b.zmtcdn.com/data/menus/430/900430/bcec2c7bd8e28db95e4b0e357c55c5c5.jpg?" menuTitle="Menu" pages="3" />
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
                    <div className="flex flex-col gap-8 my-5">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>




                </div>


                <aside style={{ height: "fit-content" }}
                    className="hidden md:block md:w-2/5 sticky top-2  p-2 shadow-md rounded-lg"
                >

                    <div>
                        <h4 className="md:text-2xl font-normal text-lg my-4">Call</h4>
                        <h4 className="md:text-2xl font-normal text-lg my-4 text-zomato-400">+917994777748</h4>
                    </div>
                    <div>
                        <h4 className="md:text-2xl font-normal text-lg my-4">Direction</h4>
                        <div className="w-full h-40">
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Overview