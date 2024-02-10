import MenuContainer from "../../Components/restaurant/orderOnline/menuContainer"


function OrderOnline() {
  return (
    <>
    <div className="w-full mt-4">
        <aside className="hidden md:flex w-1/3 ">
            <div className="w-4/6  border-r border-gray-200 h-screen py-4">
            <MenuContainer/>
            <MenuContainer/>
            <MenuContainer/>
            <MenuContainer/>
            <MenuContainer/>
            <MenuContainer/>
            <MenuContainer/>
            </div>
        </aside>
       

    </div>
    </>
    
  )
}

export default OrderOnline