import React from "react";
import Pricing from './Pricing'
import Accordion from "./Accordian";

const PricingFull = () => {
  return (
    <div>
         <div className="pricing-bg flex justify-center items-center min-h-screen">
            <div className="w-[80%] max-w-5xl text-center">
              <h2 className="text-white font-bold text-[64px]  leading-[70px]">
                Choose Your Plan. Start Your Transformation.
              </h2>
              <p className="text-white text-base md:text-lg mt-[30px]">
                No matter where you are in your fitness journey, MedFits has a plan
                tailored just for you. From beginner to advanced, every plan is
                designed to fit your lifestyle, budget, and goals.
              </p>
            </div>
    </div>
        <div className="bg-[#F7F7F7]">
            <div className="w-[80%] mx-auto mt-[40px]">
                <p className="text-[#727272] text-[18px] font-bold text-center">PRICING DETAILS</p>
                <Pricing />
            </div>
        </div>
          <div className='bg-[#272727]  border-b-[2px] border-[#727272] border-dashed'>
                    <div className='w-[80%] mx-auto'>
                        <div className='flex justify-between items-center p-[40px]'>
                            <div className='w-1/2'>
                                <h3 className='text-[#D7D7D7] text-[50px]  font-bold'>Frequently Asked Questions</h3>
                                <p className='text-[#D7D7D7] text-[18px] mt-4'>it’s not just about looking good—it’s about feeling strong, capable, and alive. Let’s work together to unlock your healthiest, most vibrant self.</p>
                            </div>
                            <div className="w-1/2">
                                <div className="max-w-lg mx-auto mt-8">
                                    <Accordion title="Can I upgrade my plan after purchasing?" content="Yes, you can upgrade your plan anytime during the program. The remaining duration of your current plan will be adjusted in the upgrade cost." />
                                    <Accordion title="Are there any hidden charges?" content="Tailwind CSS is a utility-first CSS framework." />
                                    <Accordion title="What payment methods do you accept?" content="API stands for Application Programming Interface." />
                                    <Accordion title="What happens after the plan duration ends?" content="Yes, you can upgrade your plan anytime during the program. The remaining duration of your current plan will be adjusted in the upgrade cost." />
                                    <Accordion title="Is there a refund policy if I can’t continue?" content="Tailwind CSS is a utility-first CSS framework." />
                                    <Accordion title="What’s the difference between Pro and Premium plans?" content="API stands for Application Programming Interface." />
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
    </div>
   
  );
};

export default PricingFull;
