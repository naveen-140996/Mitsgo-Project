import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../assets/images/arrow.png";
import sliderImage1 from "../assets/images/sliderimg1.png";
import sliderImage2 from "../assets/images/sliderImage2.png";

const SliderComponent = () => {
  const [progressBarIndex, setProgressBarIndex] = useState(0);
  const [percentTime, setPercentTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const slides = [sliderImage1, sliderImage2]; // Define slides array

  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false, // Manual autoplay logic
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setProgressBarIndex(index),
  };

  useEffect(() => {
    let interval;

    const startProgress = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          setPercentTime((prev) => {
            const newPercent = prev + 1; // Adjust speed
            if (newPercent >= 100) {
              sliderRef.current.slickNext();
              setProgressBarIndex((prevIndex) => (prevIndex + 1) % slides.length);
              return 0;
            }
            return newPercent;
          });
        }
      }, 50);
    };

    startProgress();
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleProgressBarClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setProgressBarIndex(index);
    setPercentTime(0);
  };

  return (

    <>
        <div className="mt-[50px]">
            <h3 className="text-center text-[#727272] text-[14px] font-bold uppercase">About us</h3>
        </div>
        <div className="my-[60px] flex justify-center">
        <div
            className="sliderContainer max-w-[1200px] w-full mx-auto slide-card h-[400px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Slider ref={sliderRef} {...settings}>
            {/* Slide 1 */}
            <div>
                <div className="flex justify-between items-center bg-white rounded-lg  slide-card">
                <div className="w-1/2 p-5">
                    <h4 className="text-[54px] text-left text-[#272727] font-bold">Who We Are?</h4>
                    <p className="text-[#727272] text-left text-[14px] font-normal">
                    At MedFits, we redefine fitness. Our focus isn’t just on transformation—it’s about building a healthy lifestyle that makes transformation a natural byproduct. Rooted in science and inspired by ancient wisdom, we create holistic fitness programs that prioritise health, endurance, and cognitive excellence, ensuring that you achieve not just your goals but a lifetime of well-being.
                    </p>
                    <div className="flex items-center mt-5">
                    <p className="text-[#136BD0] text-[16px] font-semibold">Get Free Consultation</p>
                    <img src={arrow} alt="Arrow" className="ml-3 " />
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={sliderImage2} alt="Slide 1" className="w-full rounded-tr-lg rounded-br-lg" />
                </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div>
                <div className="flex justify-between items-center bg-white rounded-lg  ">
                <div className="w-1/2">
                    <img src={sliderImage2} alt="Slide 2" className="w-full rounded-tl-lg rounded-bl-lg" />
                </div>
                <div className="w-1/2 p-5">
                    <h3 className="text-[#727272] font-bold text-[16px]">MISSION</h3>
                    <h4 className="text-[54px] text-[#272727] font-bold text-left leading-[60px] mt-3">Your Health, Our Mission</h4>
                    <p className="text-[#727272] text-left text-[14px] mt-4">
                    MedFits is not just another fitness platform. We are a science-based fitness ecosystem dedicated to helping you live better, healthier, and stronger. Our tailored programs are built for everyone—whether you’re a beginner, an athlete, or someone managing a health condition. We believe in personalised care, advanced research, and timeless methods to help you unlock your true potential.
                    </p>
                    <div className="flex items-center mt-5">
                    <p className="text-[#136BD0] text-[16px] font-semibold">Get Free Consultation</p>
                    <img src={arrow} alt="Arrow" className="ml-3" />
                    </div>
                </div>
                </div>
            </div>
            </Slider>

            {/* Progress Bar */}
            <div className="flex justify-center mt-3">
            {slides.map((_, index) => (
                <div
                key={index}
                className={`w-10 h-1 mx-1 rounded-full cursor-pointer ${
                    index === progressBarIndex ? "bg-[#136BD0]" : "bg-gray-300"
                }`}
                onClick={() => handleProgressBarClick(index)}
                />
            ))}
            </div>
        </div>
        </div>
    </>
    
  );
};

export default SliderComponent;
