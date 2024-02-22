import { useState } from "react"
import ImageViewer from 'react-simple-image-viewer'
function MenuCollection(props) {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [currentImg,setCurrentImg] = useState(0)
  const closeViewer = ()=>{
    setIsMenuOpen(false)
  }
  const openViewer = ()=>{
    setIsMenuOpen(true)
  }
  return (
    <>
       {isMenuOpen && (
        <ImageViewer 
          src={ props.images }
          currentIndex={ currentImg}
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer  }
        />
      )}

<div className= "w-full   h-full md:w-60 md:h-64 py-1 flex flex-col " onClick={openViewer}>
      <div className="w-full h-full overflow-hidden   rounded-lg">
        <img className="w-full h-full  rounded-lg transform  transition  duration-700 hover:scale-110 " src={props.images[0]} alt="" />
    </div>
    <h5 className="text-xl font-medium">{props.menuTitle}</h5>
    <p className="text-gray-500">{props.pages} pages</p>
  </div>
    </>
 
  )
}

export default MenuCollection