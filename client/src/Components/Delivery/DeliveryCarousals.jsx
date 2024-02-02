
import { NextArrow, PrevArrow } from './CarousalArrow'
import DeliveryCategory from './DeliveryCategory'
import Slider from 'react-slick'
const DeliveryCarousals = () => {
    const carouselItems = [
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
            title: "Fried Rice"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
            title: "Shawarma"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
            title: "Cake"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls"
        }

    ]

    const settings ={
        
        infinity : false,
        autoplay : false,
        slidesToShow : 6,
        slidesToScroll : 4,
        initialSlide : 0,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow/>
        
        }
        
      
     
  return (
    <>
        <div className='flex flex-col '>
        <div className='m-4 text-xl md:text-4xl text-extrabold md:m-5 '>Eat what makes you happy</div>
        <div className='px-4 mx-4 lg:gap-0  lg:block justify-between gap-3 md:gap-6 pt-4'>  
        <div className='flex flex-wrap gap-5 lg:hidden'>
        {carouselItems.map((item)=>(
            
            <DeliveryCategory key={item.image} {...item}/>)
        )}
        </div>
            <div className='hidden lg:block'>
            <Slider {...settings} className=''>
            {carouselItems.map((item)=>(
            
            <DeliveryCategory key={item.image} {...item}/>)
        )}

            </Slider>
            </div>
        </div>
         
         
         </div>
        
    </>
    
  )
}

export default DeliveryCarousals