import React from 'react'
import Pagination from './Pagination'
import arrow from '../assets/images/arrow.png'


const TransformationPage = () => {
  return (
    <div>
        {/* banner section */}
          <div className="transformation-bg flex justify-center items-center min-h-screen">
            <div className="w-[80%] max-w-5xl text-center">
            <h2 className="text-white font-bold text-[64px] leading-[70px]">
            Unleash Your Best Self – <span className='text-[#136BD0]'> Real People, Real Results!</span>
            </h2>
            <p className="text-white text-base md:text-lg mt-[30px]">
                 Discover incredible fitness transformations from our gym members. Your journey starts today!
            </p>
             <div className='flex justify-center items-center mt-[30px]'>
                <a href="#"><button className='text-[#ffffff] border-[#136BD0] bg-[#136BD0] border px-5 py-2 rounded flex items-center know-btn  transition-all duration-300 ease-in-out'>Start Your Transformation Now!<span className='ml-3'><img src={arrow} alt="" /></span></button></a>
            </div>
            </div>
         </div>
         <div>
            <Pagination />
         </div>
    </div>
  )
}

export default TransformationPage
