import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ slides }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        customPaging: (i) => (
            <div className="w-10 h-1 mx-1 rounded-full cursor-pointer bg-[#d7d7d7] service-dot"></div>
        ),
        appendDots: dots => (
            <div className="flex justify-center mt-5">
                <ul className="flex justify-center space-x-2">{dots}</ul>
            </div>
        )
      };
  return (
    <div className="service-container">
        <Slider {...settings}>
        {slides.map((slide, index) => (
            <div key={index}  className=" w-full" >
                <div className='w-full relative min-h-screen'>
                    <img src={slide.image} alt="" className='w-full'/>
                    <div className="overlay ">
                        <h2 className="text-white text-center font-bold text-[64px] leading-[70px] w-[80%]  absolute top-[30%] left-[10%]">
                            {slide.title}
                        </h2>
                        <p className="text-white text-center text-base md:text-lg mt-[30px]  w-[80%] absolute top-[50%] left-[10%]">
                            {slide.description}
                        </p>
                    </div>
                    <div className='absolute top-[65%] left-[45%]'>
                        <button className='bg-[#136BD0] px-5 py-2 rounded-[5px] w-fit text-[#fff] font-bold'>Book a Free Consultation</button>
                    </div>
                </div>
              
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default SliderComponent
