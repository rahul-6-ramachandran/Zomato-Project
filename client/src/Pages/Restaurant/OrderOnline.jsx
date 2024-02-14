import MenuContainer from "../../Components/restaurant/orderOnline/menuContainer"

import { IoCompassOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import FoodItem from "../../Components/restaurant/orderOnline/foodItem"
import FoodList from "../../Components/restaurant/orderOnline/foodList"
function OrderOnline() {
  return (
    <>
      <div className="w-full mt-4 flex ">
        <aside className="hidden md:flex flex-col w-1/5 sticky top-96 -z-20 border-r border-gray-200 h-screen py-5">

          <MenuContainer />
          <MenuContainer />
          <MenuContainer />
          <MenuContainer />
          <MenuContainer />
          <MenuContainer />
          <MenuContainer />

        </aside>
        <div className="w-full md:m-4 flex flex-col md:gap-4  gap-2 ">
          <h2 className="text-3xl font-semibold md:mx-2">Order Online</h2>
          <div className="flex ">
            <p className="flex items-center gap-2 text-lg font-light text-gray-500 md:mx-2"><IoCompassOutline />Live track your order | <GoClock />27 min</p>
          </div>
          <section >
            <FoodList title="Recommended" items={[{
              image: "https://b.zmtcdn.com/data/dish_photos/69a/641382e0ca6696edb56cfa6939ee869a.jpeg",
              title: "White Miso Chicken Ramen",
              price: "660", 
              rating:3,
              description: "asdfgaergergasdgdcfqasgfasdgfasg",
            },{
              image: "https://b.zmtcdn.com/data/dish_photos/69a/641382e0ca6696edb56cfa6939ee869a.jpeg",
              title: "White Miso Chicken Ramen",
              price: "660", 
              rating:3,
              description: "asdfgaergergasdgdcfqasgfasdgfasg",
            },{
              image: "https://b.zmtcdn.com/data/dish_photos/69a/641382e0ca6696edb56cfa6939ee869a.jpeg",
              title: "White Miso Chicken Ramen",
              price: "660", 
              rating:3,
              description: "asdfgaergergasdgdcfqasgfasdgfasg",
            },{
              image: "https://b.zmtcdn.com/data/dish_photos/69a/641382e0ca6696edb56cfa6939ee869a.jpeg",
              title: "White Miso Chicken Ramen",
              price: "660", 
              rating:3,
              description: "asdfgaergergasdgdcfqasgfasdgfasg",
            }]} />
          </section>



        </div>


      </div>
    </>

  )
}

export default OrderOnline