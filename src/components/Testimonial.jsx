import { useRef, useState } from "react";

import card1 from "../assets/images/justin-modrak.webp";
import card2 from "../assets/images/chris-robinson.webp";
import card3 from "../assets/images/dalibor-kruljac.webp";
import prevIcon from "../assets/images/prev-arrow-icon-black.svg";
import nextIcon from "../assets/images/next-arrow-icon-black.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      image: card1,
      title: "Dalibor Kruljac",
      description:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      job: "Technology Coordinator",
    },
    {
      id: 2,
      image: card2,
      title: "Chris Robinson",
      description:
        "Hexnode is exactly what our company needed to manage our devices efficiently.",
      job: "Executive Account Manager, NCS",
    },
    {
      id: 3,
      image: card3,
      title: "Justin Modrak",
      description:
        "The intuitive interface and robust features of Hexnode have been a game changer.",
      job: "KAMELEYA LTD",
    },
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true, 
    speed: 500,
    dots: false,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[30px] bg-[#FFFFFF] relative" id="customers">
      <div className="w-[88%] mx-auto max-w-[1300px]">
        <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
          What our customers say
        </h2>
        <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
          <Slider ref={sliderRef} {...sliderSettings}>
            {cards.map((card) => (
              <div key={card.id}>
                <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group ">
                  <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden ">
                    <img src={card.image} alt={card.title} className="object-cover align-middle testimonial-image" />
                  </div>
                  <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
                    <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                      <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                        {card.description}
                      </h4>
                    </div>
                    <div className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5">
                      <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                        {card.title}
                      </p>
                      <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                        {card.job}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={` bottom-[-80px] md:bottom-[30px] max-sm:bottom-0 absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%]  cursor-pointer group translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px] ${
                currentSlide === 0
                  ? "bg-gray-300 opacity-25 cursor-not-allowed"
                  : ""
              }`}
            >
              <img src={prevIcon} alt="Previous" className="mx-auto"/>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlide === cards.length - 1}
              className={`cursor-pointer bottom-[-80px] md:bottom-[30px] max-sm:bottom-0 absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] group translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px] ${
                currentSlide === cards.length - 1
                  ? "bg-gray-300 opacity-25 cursor-not-allowed"
                  : ""
              }`}
            > 
              <img src={nextIcon} alt="Next" className="mx-auto"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
