import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { IoMdCopy } from "react-icons/io"
import { MdOutlineDirections } from "react-icons/md"
function MapView(props) {
  return (
    <>
        

        <div>
                        <h4 className="md:text-2xl font-normal text-lg my-4">Call</h4>
                        <h4 className="md:text-2xl font-normal text-lg my-4 text-zomato-400">
                            {props.phno}
                        </h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="md:text-2xl font-normal text-lg my-4">Direction</h4>
                        <div className="w-full h-40">
                            <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={props.mapLocation}>
                                    <Popup>
                                        {props.title}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <p className="text-xl text-gray-500">{props.address}</p>
                        <div className="flex flex-wrap gap-3">
                            <button className="border border-gray-400 text-gray-500 px-3 py-1 rounded-xl text-xl items-center flex"><IoMdCopy/>Copy</button>
                            <button className='border border-gray-400 rounded-xl text-zomato-400 flex flex-wrap items-center px-3 py-2 items-center gap-1 md:text-xl'><MdOutlineDirections/><span className="text-black font-light">Direction</span></button>

                        </div>
                    </div>
    </>
  )
}

export default MapView