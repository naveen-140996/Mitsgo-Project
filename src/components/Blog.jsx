import React from 'react'
import Whyimg1 from "../assets/images/why-image-1.png";
import Whyimg2 from "../assets/images/why-image-2.png";
import Whyimg3 from "../assets/images/why-image-3.png";
import Whyimg4 from "../assets/images/why-image-4.png";
import Whyimg5 from "../assets/images/why-image-5.png";
import fitness from "../assets/images/fitnessImg.png";
import success from "../assets/images/success.png";
import arrow from '../assets/images/arrow.png'

const Blog = () => {
  return (
    <div>
        <div className="blog-bg flex justify-center items-center min-h-screen">
            <div className="w-[80%] max-w-5xl text-center">
                <h2 className="text-white font-bold text-[64px] leading-[70px]">
                     Discover the World of Health, Fitness, and Transformation
                </h2>
                <p className="text-white text-base md:text-lg mt-[30px]">
                     Welcome to the MedFits Blog—your go-to resource for all things health and fitness. From expert advice and in-depth research to practical tips and inspiring success stories, our blog is designed to empower your journey toward a healthier, stronger, and more vibrant life.
                </p>
            </div>
        </div>
        <div className='p-[80px]'>
            <div className=''>
                <h3 className='text-center text-[#272727] font-bold text-[54px]'>Why Read the our Blog?</h3>
                <div className='flex justify-evenly gap-5 items-center mt-[20px] w-full'>
                    <div className='left-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[200px] w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>01</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Science-Based Insights</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Stay updated with the latest research-backed strategies for improving your health, fitness, and lifestyle.</p>
                    </div>
                    <div className='right-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[200px]  w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>02</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Actionable Tips</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Get simple, effective tips to incorporate healthy habits into your daily routine.</p>
                    </div>
                </div>
                <div className='flex justify-evenly gap-5 items-center mt-[20px] w-full'>
                    <div className='left-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[200px] w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>03</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Ancient Wisdom Meets Modern Science</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Learn how ancient practices can transform your approach to fitness and well-being.</p>
                    </div>
                    <div className='right-side p-[20px] border border-[#D7D7D7] rounded-[10px] h-[200px]  w-1/2'>
                        <h2 className='font-bold text-[54px] text-[#D7D7D7]'>04</h2>
                        <p className='text-[#272727] font-bold text-[20px]'>Inspiring Stories</p>
                        <p className='text-[#727272] text-[16px] font-normal mt-[10px]'>Be motivated by real-life transformations and success stories from our clients and community.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#272727] p-[80px]'>
            <div className=' w-full border-b border-[#373737] pb-3'>
                <div className='left-side-content'>
                    <h4 className='text-[#d7d7d7] text-[20px] font-bold text-center'>Blog Categories</h4>
                    <h2 className='text-[54px] text-[#f7f7f7] font-bold text-center'>Organize Your Learning</h2>
                </div>
            </div>
            <div className="flex justify-evenly gap-5 items-center mt-[60px] w-full">
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                    <div className='absolute top-[-25px] left-[25px]'>
                        <img src={fitness} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Fitness & Training</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Science-backed workouts, ancient methods, and expert tips for optimal results.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg1} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Research & Innovation </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Dive into cutting-edge findings from our team on fitness, nutrition, and ancestral practices.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative  w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={Whyimg2} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Nutrition & Diet</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Explore the role of food in health, from meal planning to understanding macronutrients.</p>
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
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'> Health & Lifestyle </h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Learn about sleep, stress management, and habits for long-term well-being.</p>
                    </div>
                </div>
                <div className='card-based p-4 bg-[#474747] rounded-lg relative w-[33%] h-[200px]'>
                <div className='absolute top-[-25px] left-[25px]'>
                        <img src={success} alt="" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='inner-content pt-[30px]'>
                        <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Success Stories</h3>
                        <p className='text-[#D7D7D7] text-[14px] font-normal pt-[10px]'>Celebrate the journeys and achievements of our clients.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-[40px]'>
            <h3 className='text-[#272727] font-bold text-[54px] text-center'>Stay Informed. Stay Inspired.</h3>
            <div className='flex justify-center items-center mt-[30px]'>
                <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>Share Your Story with Us <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
                <a href="#"><button className='text-[#ffffff] border-[#136BD0] bg-[#136BD0] border px-5 py-2 rounded flex items-center know-btn  transition-all duration-300 ease-in-out ml-4'>Subscribe for Updates<span className='ml-3'><img src={arrow} alt="" /></span></button></a>
            </div>
        </div>
    </div>
  )
}

export default Blog
