import React from 'react'
import discover from "../assets/images/discover-img.png";
import line from "../assets/images/Line 12.png";
import arrow from '../assets/images/arrow.png';

const Rediscover = () => {
  return (
    <div>
        <div className='bg-[#272727]  border-b-[2px] border-[#727272] border-dashed'>
            <div className='w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='w-1/2'>
                        <h3 className='text-[#D7D7D7] text-[50px]  font-bold'>Re-discover the Ancient Strength Within You</h3>
                        <p className='text-[#D7D7D7] text-[18px] mt-4'>it’s not just about looking good—it’s about feeling strong, capable, and alive. Let’s work together to unlock your healthiest, most vibrant self.</p>
                        <img src={line} alt="" className='mt-[30px]'/>
                        <h3 className='text-[#F7F7F7] text-[30px] mt-[30px] font-bold'>Join the MedFits community</h3>
                        <p className='text-[#D7D7D7] text-[18px] mt-4'>Whether you’re 18 or 80, looking to reach new fitness heights, MedFits is for everyone. Our mission is to transform lives through health, science, and timeless wisdom.</p>
                        <div className='mt-[40px]'>
                            <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>Start Your Journey <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
                        </div>
                    </div>
                    <div>
                        <img src={discover} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rediscover
