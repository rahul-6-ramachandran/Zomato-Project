
import Slider from "react-slick"
import { NextArrow,PrevArrow } from "./CarousalArrow"
 
function Brand() {

    const settings ={
       
        infinity : false,
        autoplay : false,
        slidesToShow : 6,
        slidesToScroll : 4,
        initialSlide : 0,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }]
        }

    const Brands = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433844.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188086.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672382455.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/d78cacb4cb49d84e50340c7c279f2d1c_1598075399.png?output-format=webp"       
    ]
  return (
    <>
     <div className='flex flex-col md:mt-5'>
        <div className='m-4 text-xl md:text-4xl text-extrabold md:m-5 '>Try out the Brands</div>
        <div className='px-4 mx-4 lg:gap-0  lg:block justify-between gap-3 md:gap-6 pt-4'>  
        <div className='flex flex-wrap gap-5 lg:hidden'>
        </div>
            <div className='hidden lg:block'>
            <Slider {...settings} >
            {Brands.map((item)=>(
                <div key={item} className=" p-3 bg-gray-100 rounded-full">
                     <img  src={item} alt="" className="w-full h-full rounded-full object-cover"/>
                </div>
           
        ))}

            </Slider>
            </div>
        </div>
         
         
         </div>
     ``
         
         
         
    </>
  )
}

export default Brand