import React, { useState } from 'react';
import tab1 from "../assets/images/tab-1.png";
import tab2 from "../assets/images/tab-2.png";
import tab3 from "../assets/images/tab-3.png";
import arrow from '../assets/images/arrow.png'

const services = [
  { 
    id: 1, 
    title: "Customized Fitness Plans",
    content: "We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab1 
  },
  { 
    id: 2, 
    title: "Personalized Nutrition Plans", 
    content: "We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab2 
  },
  { 
    id: 3, 
    title: "Specialized Training Programs", 
    content: "We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab3 
  },
  { 
    id: 4, 
    title: "Post-Injury Rehabilitation", 
    content: "Guided recovery plans to help you get back stronger and safer.We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab1 
  },
  { 
    id: 5, 
    title: "Research-Driven Innovation", 
    content: "We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab2 
  },
  { 
    id: 6, 
    title: "Lifestyle Management", 
    content: "We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.", 
    image: tab3 
  }
];

const Service = () => {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <div className='bg-[#272727] mt-[50px]'>
      <div className='w-[80%] mx-auto'>
        <h6 className='text-center font-bold text-[14px] text-[#727272] pt-[50px]'>Our Services</h6>
        <h4 className='text-center font-bold text-[54px] text-[#F7F7F7] pt-[20px]'>Services We Offer</h4>
        <p className='text-[#D7D7D7] text-[14px] font-normal text-center pt-[20px]'>
          At MedFits, we redefine fitness. Our focus isn’t just on transformation—it’s about building a healthy lifestyle 
          that makes transformation a natural byproduct...
        </p>

        <div className='pt-[40px] pb-[60px] flex '>
          {/* Left Tab Section */}
          <div className='w-[40%] bg-[#272727]  border border-[#313131] rounded-tl-[20px] rounded-bl-[20px]'>
            {services.map((service,index) => (
              <p 
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`p-[30px] text-center text-[20px] font-bold border-b border-[#313131] cursor-pointer 
                  ${activeTab.id === service.id ? "text-[#F7F7F7] bg-[#313131]" : "text-[#727272]"}
                   ${index === 0 ? "rounded-tl-[10px]" : ""} 
                  ${index === services.length - 1 ? "rounded-bl-[10px] border-b-0" : ""}`}
                  
              >
                {service.title}
              </p>
            ))}
          </div>

          {/* Right Image and Content Section */}
          <div className='w-[60%] flex flex-col items-center relative'>
            <img src={activeTab.image} alt={activeTab.title} className=' w-full h-[545px] rounded-tr-[20px] rounded-br-[20px]' />
            <div className='absolute bottom-0 left-0'>
                <div className=''>
                    <div className='flex justify-between items-center p-4'>
                        <div className='w-[70%]'>
                            <h6 className='font-bold text-[20px] text-[#f7f7f7] mb-3'>{activeTab.title}</h6>
                            <p className='font-normal text-[14px] text-[#D7D7D7]'>{activeTab.content}</p>
                        </div>
                        <div className='w-[30%] ml-5'>
                            <a href="#"><button className='text-[#ffffff] border-[#136BD0] bg-[#136BD0] border px-5 py-2 rounded flex items-center know-btn  transition-all duration-300 ease-in-out'>Know more <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
