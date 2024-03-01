import { useState ,useEffect} from "react"
import ImageViewer from 'react-simple-image-viewer'
import PhotosCollection from "../../Components/restaurant/photosCollection"
import { useDispatch, useSelector } from "react-redux"
import { getImage } from "../../Redux/Reducer/image/imageSlice"


function Photos() {
    const [photos,setPhotos] = useState()
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [currentImg,setCurrentImg] = useState(0)
    const closeViewer = ()=>{
      setIsMenuOpen(false)
    }
    const openViewer = ()=>{
      setIsMenuOpen(true)
    }

    const reduxState = useSelector((globalStore)=> globalStore.restaurants.selectedRestaurant)
    const dispatch = useDispatch()
    useEffect(()=>{
      if(reduxState){
          dispatch(getImage(reduxState?.photos)).then((data)=>{
              const images = []
              data.payload.images.images.map(({location})=>images.push(location))
              setPhotos(images)
      })
      }
     
  },[])
  return (
    <>   {isMenuOpen && (
        <ImageViewer 
          src={ photos}
          currentIndex={ currentImg}
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer  }
        />
      )} 
    <div className="flex gap-3 my-4">
        {
            
                photos?.map((photo)=>(
                    <PhotosCollection key={photo.id} image={photo} openViewer={openViewer}/>
                ))
            
        }
    </div>
    </>
  
  )
}

export default Photos