import FoodItem from "./foodItem"
function FoodList(props) {

  return (
    <>
     <div >
              <div className="w-full  sticky top-80">
              <h2 className="bg-white  w-full px-4 py-5 text-xl font-semibold">{props.title}</h2>

              </div>
              {
                props.items.map((item)=>(
                    <FoodItem key={item.title} {...item}/>
          
                ))
              }
            </div>
    </>
  )
}

export default FoodList