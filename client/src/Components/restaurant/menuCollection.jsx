
function MenuCollection(props) {
  return (
  <div className= "w-full h-full md:w-60 md:h-64 py-1 flex flex-col">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img className="w-full h-full rounded-lg transform  transition  duration-700 hover:scale-110" src={props.image} alt="" />
    </div>
    <h5 className="text-xl font-medium">{props.menuTitle}</h5>
    <p className="text-gray-500">{props.pages} pages</p>
  </div>
  )
}

export default MenuCollection