import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctor1 from '../assets/images/doctor3.png';
import doctor2 from '../assets/images/doctor2.png';
const slidesData = [
    {
      img: doctor1,
      name: "Dr. Aryan Mishra",
      para:"Lead Nutrition Scientist PhD in Nutrition Science | 12+ years of experience"
    },
    {
      img: doctor2,
      name: "Dr. Mishra",
      para:"Specializes in the role of functional foods and their impact on metabolic health. He leads research on personalized nutrition strategies."
    },
    {
      img: doctor2,
      name: "Dr. Aryan Mishra",
      para:"Lead Nutrition Scientist PhD in Nutrition Science | 12+ years of experience"
    },
  ];

const ProfessionalTeam = () => {
    const sliderRef = useRef(null);
    
        useEffect(() => {
            const slick = sliderRef.current;
            if (slick) {
              slick.slickGoTo(0);
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
            autoplaySpeed: 3000,
            focusOnSelect: false, // ✅ Prevents unwanted focus  
            accessibility: false,  // ✅ Disables auto-focus on slide change
            cssEase: "ease-in-out",
            customPaging: (i) => (
                <div className="w-10 h-1 mx-1 rounded-full cursor-pointer bg-[#d7d7d7] service-dot"></div>
            ),
            appendDots: dots => (
                <div className="flex justify-center mt-5">
                    <ul className="flex justify-center space-x-2">{dots}</ul>
                </div>
            ),
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
    <div>
        <div className="bg-[#F7F7F7] p-[40px]">
            <div className="tops-titles">
                <p className='text-[#727272] text-[14px] font-bold text-center pt-[60px]'>Meet Our Team</p>
                <h3 className='text-[54px] font-bold text-[#272727] text-center'>Dedicated Professionals Behind the Science</h3>
                <p className='text-[#727272] text-[14px] font-normal text-center'>Our research team comprises experts with advanced qualifications in nutrition, exercise science, physiology, and behavioural psychology. Each member brings unique expertise and passion for uncovering health secrets that make MedFits unique.</p>
            </div>
            <div className="container transformation professional mt-[50px]">
                <Slider {...settings}  ref={sliderRef} className="mt-[80px] mb-[40px]" >
                    {slidesData.map((slide, index) => (
                    <div key={index} className=" w-full max-w-[1200px] ml-[50px] mr-[50px] rounded-[20px]">
                            <img src={slide.img} alt="" className='w-full'/>
                        <div className='bg-[#F7F7F7] card-box rounded-bl-[10px] rounded-br-[10px] p-3'>
                            <div className=''>
                                    <div>
                                    <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.name}</p>
                                    </div>
                                    <div>
                                    <p className='text-[#272727] text-[12px] font-bold text-center'>{slide.para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalTeam
