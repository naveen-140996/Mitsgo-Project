import React, { useEffect, useRef } from "react";
import transformImg1 from "../assets/images/transformImg-1(2).png";
import transformImg2 from "../assets/images/transformImg-2.png";
import transformImg3 from "../assets/images/transformImg3.png";
import arrow from "../assets/images/arrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
    {
      img: transformImg1,
      name: "Jon Doe",
      weightLoss: "20 lbs",
      age: "38M",
      duration: "11 months",
    },
    {
      img: transformImg2,
      name: "Jon Doe",
      weightLoss: "20 lbs",
      age: "38M",
      duration: "11 months",
    },
    {
      img: transformImg1,
      name: "Jon Doe",
      weightLoss: "20 lbs",
      age: "38M",
      duration: "11 months",
    },
  ];

const Transformation = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
      const slick = sliderRef.current;
      if (slick && slick.slickGoTo) {
          slick.slickGoTo(0, true); // true prevents animation
      }
  }, []);
    
      const settings = {
        speed: 1000,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        prevArrow: <button className="prev">Prev</button>,
        nextArrow: <button className="next">Next</button>,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "30%",
        swipe: true,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "ease-in-out",
        focusOnSelect: false, // ✅ Prevents unwanted focus  
        accessibility: false,  // ✅ Disables auto-focus on slide change
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <div className="bg-[#F7F7F7]">
        <div className='w-[80%] mx-auto'>
        <p className='text-[#727272] text-[14px] font-bold text-center pt-[60px]'>Transformation</p>
        <h3 className='text-[54px] font-bold text-[#272727] text-center'>Transformations that Inspire</h3>
        <p className='text-[#727272] text-[14px] font-normal text-center'>Every transformation is a story of resilience, health, and empowerment. Our focus on health-first transformations ensures that our members are not only achieving their fitness goals but also experience an enhanced quality life.</p>

    <div className="container transformation mt-[50px]">
      <Slider {...settings}  ref={sliderRef} tabIndex="-1" className="mt-[80px]" >
        {slidesData.map((slide, index) => (
          <div key={index} className="test w-full max-w-[1200px] ml-[50px] mr-[50px] rounded-[20px]">
            <div className='flex justify-between items-center bg-black w-full p-4 rounded-tl-[10px] rounded-tr-[10px]'>
              <p className='text-[#fff] text-[14px] w-1/2 text-center'>Before</p>
              <p className='text-[#fff] text-[14px] w-1/2 text-center'>After</p>
            </div>
            <img src={slide.img} alt="" className='w-full h-[300px] object-cover'/>
            <div className='bg-[#272727] text-center p-4'>
              <p className='text-[#fff] text-[14px]'>Best decision ever! I feel amazing! Thank you!</p>
            </div>
            <div className='bg-[#F7F7F7] rounded-bl-[10px] rounded-br-[10px] p-3'>
              <div className='flex justify-evenly items-center'>
                <div>
                  <p className='text-[#727272] text-[12px] text-center font-bold'>Name</p>
                  <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.name}</p>
                </div>
                <div>
                  <p className='text-[#727272] text-[12px] text-center font-bold'>Weight LOSS</p>
                  <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.weightLoss}</p>
                </div>
                <div>
                  <p className='text-[#727272] text-[12px] text-center font-bold'>AGE</p>
                  <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.age}</p>
                </div>
                <div>
                  <p className='text-[#727272] text-[12px] text-center font-bold'>Duration</p>
                  <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
         <div className='mt-[40px] flex justify-center items-center'>
            <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>See More <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
        </div>
    </div>
    </div>
    
  )
}

export default Transformation
