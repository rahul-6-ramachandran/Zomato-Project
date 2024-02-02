

const DeliverySmCard = ({image,title})=>{
    return(
        <><div className=' lg:hidden flex flex-col items-center'>
        <div className='w-16 h-16 md:w-32 md:h-32'>
        <img  className='w-full h-full rounded-full' src={image} alt="" />
        </div>
        <div><h4 className="font-medium text-center =my-2">{title}</h4></div>
    </div></>
    )
}

const DeliveryLgCard = ({image,title})=>{
    return(
    <><div className='hidden lg:flex flex-col items-center'>
    <div className='w-40 h-40 '>
    <img  className='w-full h-full rounded-full ' src={image} alt="" />
    </div>
    <div className="text-center"><h4 className="text-2xl text-gray-800  my-2">{title}</h4></div>
</div></>
    )
}
function DeliveryCategory(props) {
  return (
    <>
 
   
    <DeliverySmCard {...props}/>
    <DeliveryLgCard  {...props}/>

        
    </>
    
  )
}

export default DeliveryCategory