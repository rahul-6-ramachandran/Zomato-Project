import ReactStars from 'react-rating-stars-component'
function FoodItem(props) {
  return (
    <>
      <div className="flex md:m-4 items-center">
        <div className="md:w-44 md:h-40  w-2/4 h-2/6 rounded-xl" >   
            <img className="w-full h-full rounded-xl"  src={props.image}alt="" />
        </div>
        <div className=" flex flex-col gap-1 md:gap-2 px-2 md:px-4 py-1">
            <h3 className=" md:text-2xl font-medium">{props.title}</h3>
            <p className="text-gray-500 font-regular md:text-xl">{props.price}</p>
            <ReactStars count={5} value={props.rating}/>
            <p className="text-gray-500 font-regular md:text-xl">{props.description}</p>
        </div>

      </div>
  
    </>
  )
}

export default FoodItem