



function PhotosCollection(props) {
  
  return (
    <>
       

    

<div className= "w-full h-full md:w-60 md:h-64 py-1 flex flex-col " onClick={props.openViewer}>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img className="w-full h-full rounded-lg transform  transition  duration-700 hover:scale-110" src={props.image} alt="" />
    </div>
   
  </div>
 
 


    </>
  )
}

export default PhotosCollection