import { MdArrowRight } from "react-icons/md"

function PictureCarousalcard() {
  return (
    <>
    <div className='w-18 lg:w-58 px-3  h-40 lg:h-80 relative overflow-hidden'>
        <img 
        className='w-full h-full object-cover relative transition duration-700 ease-in-out rounded-lg'
        src="https://b.zmtcdn.com/data/pictures/2/900082/f43189ce35805c0ada7db51b8646c79b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt="" />
        
         <div className="bg-gradient-to-t from-zinc-950 w-full  flex p-3    flex-col  absolute bottom-0 text-white rounded-lg">
        <h3 >8 Places for Arts Lovers</h3>
        <div className="items-center flex"> <h6>8 places</h6><MdArrowRight/></div>
       
    </div>
    </div>
   
    </>
    
  )
}

export default PictureCarousalcard