import { useState } from "react"
import ImageViewer from 'react-simple-image-viewer'
import PhotosCollection from "../../Components/restaurant/photosCollection"


function Photos() {
    const [photos,setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/6/903046/aa0cbf0d85a8c2ec2e8ba68c925260a7.jpg","https://b.zmtcdn.com/data/pictures/chains/6/903046/facb92da5cde7510b6f6ac780308eb16.jpg","https://b.zmtcdn.com/data/pictures/chains/6/903046/ba2141d7b3ecbbdf2896c9b55a102804.jpg?"])
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [currentImg,setCurrentImg] = useState(0)
    const closeViewer = ()=>{
      setIsMenuOpen(false)
    }
    const openViewer = ()=>{
      setIsMenuOpen(true)
    }

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
            
                photos.map((photo)=>(
                    <PhotosCollection key={photo.id} image={photo} openViewer={openViewer}/>
                ))
            
        }
    </div>
    </>
  
  )
}

export default Photos