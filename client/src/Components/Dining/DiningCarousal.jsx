import Slider from "react-slick"
import { NextArrow,PrevArrow } from "../Delivery/CarousalArrow"
import PictureCarousalcard from "../PictureCarousal"

function DiningCarousal() {
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
    <div>
        <Slider {...settings}>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        <PictureCarousalcard/>
        
        </Slider>

    </div>
  )
}

export default DiningCarousal