import React from 'react'
import arrow from '../assets/images/arrow.png'
const HeroBanner = () => {
  return (
    <div>   
        <div className='banner'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-[#F7F7F7] text-[40px] font-bold absolute top-[40%] '>Where <span className='text-[#136BD0]'> Science </span> Meets <span className='text-[#136BD0]'>Strength</span>  and </h2>
                <h2 className='text-[#F7F7F7] text-[40px] font-bold absolute top-[50%]'>Health Transforms Lives</h2>
                <div className=''>
                    <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center absolute top-[65%] left-[47%] signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>Join Now <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
