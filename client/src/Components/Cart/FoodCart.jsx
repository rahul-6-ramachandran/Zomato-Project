
function FoodCart(props) {
  return (
   <>
  
            <hr className="my-2"/>
            <div className="flex flex-col gap-2 px-5 ">
                <di className="flex items-center justify-between">
                    <h3 className="text-xl">
                       {props.name}
                    </h3>
                    <div className="flex flex-col items-end p">
                        <small className="text-xl font-semibold flex items-center gap-2">₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="bg-zomato-400 text-white rounded flex items-center gap-1 px-1" >
                        <button className="p-1 bg-zomato-400 text-white rounded">-</button>
                        <small>45</small>
                        <button className="p-1 bg-zomato-400 text-white rounded">+</button>

                        </div>
                       
                    </div>
                </di>
            </div>

   </>
  )
}

export default FoodCart