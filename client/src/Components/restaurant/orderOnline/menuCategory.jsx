import classnames from 'classnames'
function MenuCategory(props) {
  return (
    <>
    {/* <div className='flex  md:hidden sticky top-30'>
    <h3 >{props.name}({props.items.length})</h3>
    </div> */}
     <div className={classnames("hidden p-2 md:flex text-xl font-regular text-gray-600 " , {
        "text-zomato-400 bg-zomato-50 font-medium border-r-4 border-zomato-400":props.isActive
     })} 
       
     >
        
        <h3  onClick={props.onClickHandler}
        id={props.name}>{props.name}({props.items.length})</h3>
</div>
    </>
   
  )
}

export default MenuCategory