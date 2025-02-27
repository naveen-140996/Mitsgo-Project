import React from 'react'
import Pricing from "../assets/images/pricing-bg.png";
import ServiceImg1 from "../assets/images/serviceImg.png";
import ServiceImg2 from "../assets/images/contact-us.png";
import Slider from './SliderComponent';
import customizefitness from  "../assets/images/cutomized-fitness.png";
import Accordion from "./Accordian";
import line from "../assets/images/Line 12.png";
import Whyimg1 from "../assets/images/eyeplus.png";
import Whyimg2 from "../assets/images/idea.png";
import Whyimg3 from "../assets/images/puzzele.png";
import ProfessionalTeam from './ProfessionalTeam';
import arrow from '../assets/images/arrow.png';

const Servicepage = () => {
    const slidesData = [
        { 
          id: 1, 
          image: ServiceImg1, 
          title: "Services Tailored to Transform Your Health & Fitness", 
          description: "We provide a range of services designed to meet your unique needs, whether you’re looking to improve fitness, manage health conditions, or achieve specific goals.Transform your health today!"
        },
        { 
          id: 2, 
          image: Pricing, 
        title: "Services Tailored to Transform Your Health & Fitness", 
          description: "We provide a range of services designed to meet your unique needs, whether you’re looking to improve fitness, manage health conditions, or achieve specific goals.Transform your health today!"
        },
        { 
          id: 3, 
          image: ServiceImg2, 
            title: "Services Tailored to Transform Your Health & Fitness", 
          description: "We provide a range of services designed to meet your unique needs, whether you’re looking to improve fitness, manage health conditions, or achieve specific goals.Transform your health today!"
        },
      ];
  return (
    <div>
        <Slider slides={slidesData} />
        <div className=''>
            <div className='flex justify-between  w-full'>
                <div className='left-side w-[50%] p-[80px]'>
                    <h2 className='text-[#272727] text-[40px] font-bold'>Customized Fitness Plans</h2>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>Forget generic fitness routines. At MedFits, we understand that every body is unique. That’s why we design personalized fitness programs that align with your goals, lifestyle, and health status. Whether you’re working out at home, hitting the gym, or staying active outdoors, we provide plans that optimize your results.</p>
                    <h4 className='text-[#727272] text-[20px] mt-[20px] font-bold'>Our Approach</h4>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>Comprehensive fitness assessments to understand your current fitness level.</p>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>Tailored programs based on your goals—weight loss, muscle gain, strength, or endurance.</p>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>Regular progress tracking and plan adjustments.</p>
                    <h4 className='text-[#727272] text-[20px] mt-[20px] font-bold'>Who It’s For</h4>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>Beginners</p>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>intermediate fitness enthusiasts</p>
                    <p className='text-[#727272] text-[18px] mt-[20px] font-medium'>athletes seeking structured science-based training.</p>
                    <div className='mt-[30px]'>
                        <button className='bg-[#136BD0] px-5 py-2 rounded-[5px] w-fit text-[#fff] font-bold'>Get Your Custom Plan</button>
                    </div>
                </div>
                <div className='w-[50%] flex justify-end'>
                    <img src={customizefitness} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-[#272727]'>
            <div className='w-[100%] mx-auto p-[40px]'>
                <div className='flex justify-between items-center '>
                    <div className='w-1/2'>
                        <h3 className='text-[#D7D7D7] text-[50px]  font-bold'>Frequently Asked Questions</h3>
                        <p className='text-[#D7D7D7] text-[18px] mt-4'>it’s not just about looking good—it’s about feeling strong, capable, and alive. Let’s work together to unlock your healthiest, most vibrant self.</p>
                    </div>
                    <div className="w-1/2">
                        <div className="max-w-lg mx-auto mt-8">
                            <Accordion title="How are the fitness plans customised for me?" content="we design fitness plans based on a detailed assessment of your goals, current fitness level, lifestyle, and any specific health concerns. Whether you’re looking to lose weight, build muscle, or improve overall health, your plan will be tailored to your unique needs." />
                            <Accordion title="Do I need gym access to follow the workout plans?" content="Tailwind CSS is a utility-first CSS framework." />
                            <Accordion title="Are the nutrition plans restrictive? Will I need to follow a specific diet?" content="API stands for Application Programming Interface." />
                            <Accordion title="What health conditions can your specialized training programs address?" content="Yes, you can upgrade your plan anytime during the program. The remaining duration of your current plan will be adjusted in the upgrade cost." />
                            <Accordion title="How does MedFits incorporate ancient methods and research-driven techniques?" content="we design fitness plans based on a detailed assessment of your goals, current fitness level, lifestyle, and any specific health concerns. Whether you’re looking to lose weight, build muscle, or improve overall health, your plan will be tailored to your unique needs." />
                            <Accordion title="Can MedFits help with overall lifestyle management?" content="we design fitness plans based on a detailed assessment of your goals, current fitness level, lifestyle, and any specific health concerns. Whether you’re looking to lose weight, build muscle, or improve overall health, your plan will be tailored to your unique needs." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* research section */}
        <div className='p-[40px]'>
            <div className="flex justify-evenly  w-full">
                <div className='left-side w-1/2'>
                    <h3 className='text-[#727272] font-bold text-[20px]'>Research & Innovation</h3>
                    <h2 className='text-[#272727] font-bold text-[54px] leading-[60px] mt-[30px]'>Unveiling the Future of Fitness and Health with Science and Wisdom</h2>
                    <p className='text-[#727272] text-[16px] font-medium mt-[30px]'>At MedFits, we believe in going beyond conventional fitness approaches. Our dedicated research team is at the forefront of discovering cutting-edge strategies to transform health, fitness, and lifestyle. By merging modern science with ancient wisdom, we uncover methods to help you live longer, healthier, and more fulfilled lives.</p>
                    <div className='mt-[30px]'>
                        <button className='bg-[#136BD0] px-5 py-2 rounded-[5px] w-fit text-[#fff] font-bold'>Get Your Custom Plan</button>
                    </div>
                </div>
                <div className='right-side w-1/2 bg-[#272727] p-[30px] rounded-[10px]'>
                    <h3 className='text-[#D7D7D7] font-bold text-[40px]'>Research Highlights</h3>
                    <h4 className='text-[#F7F7F7] text-[20px] mt-[20px] font-bold'>Ancestral Fitness</h4>
                    <p className='text-[#D7D7D7] text-[16px] font-normal mt-[10px]'>Explore how ancient warriors and hunters built unmatched endurance and strength. Our research integrates these techniques into modern workouts.</p>
                    <img src={line} alt="line-img" className='mt-[20px] w-full' />
                    <h4 className='text-[#F7F7F7] text-[20px] mt-[20px] font-bold'>Longevity Secrets</h4>
                    <p className='text-[#D7D7D7] text-[16px] font-normal mt-[10px]'>Learn how ancient dietary habits and daily rituals contributed to a healthier, longer life.</p>
                    <img src={line} alt="line-img" className='mt-[20px] w-full' />
                    <h4 className='text-[#F7F7F7] text-[20px] mt-[20px] font-bold'>Modern Science Meets Tradition</h4>
                    <p className='text-[#D7D7D7] text-[16px] font-normal mt-[10px]'>We bridge the gap between proven ancient practices and contemporary scientific findings to create unparalleled fitness solutions.</p>
                </div>
            </div>
        </div>
        {/* our mission section */}
        <div className='mt-[30px] p-[40px]'>
            <div className='border border-[#D7D7D7] rounded-[10px] p-[40px]'>
                <h3 className='text-center text-[#727272] font-bold text-[40px]'>Our Mission in Research</h3>
                <div className='flex justify-evenly gap-5 items-center mt-[20px] w-full'>
                    <div className='left-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[300px] w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>01</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Professional Research on NutritionProfessional Research on Nutrition</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Our team dives deep into the science of food and its impact on physical and mental health. From the role of macronutrients to the importance of micronutrients, we tailor evidence-based nutrition strategies to optimise your well-being.</p>
                    </div>
                    <div className='right-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[300px]  w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>02</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Lifestyle Optimization</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>The way we live impacts the way we feel. We research sustainable lifestyle habits, stress management techniques, and ways to improve sleep, ensuring a holistic approach to health.</p>
                    </div>
                </div>
                <div className='flex justify-evenly gap-5 items-center mt-[20px] w-full'>
                    <div className='left-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[300px] w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>03</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Advanced Workout Strategies</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Our research-driven workout plans are designed to enhance strength, endurance, flexibility, and cognitive function. Every program is backed by science to deliver measurable results efficiently.</p>
                    </div>
                    <div className='right-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[300px]  w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>04</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Reviving Ancient Practices</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>By studying the lifestyles of our ancestors and ancient practices, we uncover timeless secrets to health and longevity. These strategies inspire unique programs that blend ancient wisdom with today’s knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* why medfits standout */}
        <div className='bg-[#272727] p-[40px]'>
            <div className='border-b border-[#373737] pb-3'>
                <h4 className='font-bold text-[54px] text-[#FFFFFF] text-center'>Why MedFits Research Stands Out</h4>
            </div>
             <div className="flex justify-evenly gap-5 items-center mt-[60px] w-full">
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                    <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg2} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Innovative Approaches</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Every finding is rooted in scientific rigour and tested for real-world application.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg1} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Holistic Perspective </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>We consider every aspect of health, physical, mental, and emotional.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg3} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Client- Centered Solutions</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Our research aims to make a difference in your life by offering practical and actionable insights.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ProfessionalTeam />
        </div>
        <div className='bg-[#272727] p-[40px] border-b-[2px] border-[#727272] border-dashed'>
            <h3 className='text-center text-[#F7F7F7] font-bold text-[54px]'>Interested in Our Research? 
            <span className='text-[#136BD0]'>Stay Connected!</span></h3>
            <div className='mt-[40px] flex justify-center'>
                <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>Get Your Custom Plan <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
            </div>
        </div>
    </div>
  )
}

export default Servicepage
