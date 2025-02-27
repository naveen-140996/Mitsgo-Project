import React from 'react'
import Whyimg1 from "../assets/images/why-image-1.png";
import Whyimg2 from "../assets/images/why-image-2.png";
import Whyimg3 from "../assets/images/why-image-3.png";
import Whyimg4 from "../assets/images/why-image-4.png";
import Whyimg5 from "../assets/images/why-image-5.png";

const WhyChooseUs = () => {
  return (
    <div className='bg-[#272727] p-[40px]'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center w-full border-b border-[#373737] pb-3'>
                <div className='left-side-content w-[40%]'>
                    <h2 className='text-[54px] text-[#fff] font-bold'>Why Choose MedFits?</h2>
                </div>
                <div className='right-side-content w-[60%]'>
                    <p className='text-[#D7D7D7] text-[14px] font-normal leading-6'>At MedFits, we redefine fitness. Our focus isn’t just on transformation—it’s about building a healthy lifestyle that makes transformation a natural byproduct. Rooted in science and inspired by ancient wisdom, we create holistic fitness programs that prioritise health, endurance, and cognitive excellence, ensuring that you achieve not just your goals but a lifetime of well-being.</p>
                </div>
            </div>
            <div className="flex justify-evenly gap-5 items-center mt-[60px] w-full">
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                    <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg1} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Science-Based Training</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>We develop advanced, customized workout plans tailored to your goals, whether it’s weight loss, muscle gain, strength building, or improved mobility.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg1} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Ancient Wisdom Re-imagined </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Our research team combines modern science with proven ancient techniques to revive your strength, endurance, and cognitive abilities.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg2} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Holistic Nutrition</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>We craft simple yet powerful diet plans that nourish your body and mind while aligning with your fitness journey.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly gap-5 items-center mt-[40px]">
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                    <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg3} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Focus on Longevity </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>MedFits is about creating sustainable habits that lead to long-term health and vitality.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg4} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Specialised Health Programs </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>From PCOD/PCOS, diabetes, and hypertension to rehabilitation and injury recovery, our programs cater to every health condition and age group.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg5} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>24×7 Support with MedFits App </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Stay connected with our expert team anytime, track your progress, and receive constant lifestyle guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
