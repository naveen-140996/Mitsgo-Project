import React from 'react'
import appstoreImage from "../assets/images/app-store-image.png";
import arrow from '../assets/images/arrow.png';
import App1 from '../assets/images/App 1.png';
import App2 from "../assets/images/App 2.png";
import App3 from "../assets/images/App 3.png";
import App4 from "../assets/images/App 4.png";
import App5 from "../assets/images/App 5.png";
import App6 from "../assets/images/App 6.png";

const AppStore = () => {
  return (
    <div className='mt-[60px]'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center bg-[#272727] rounded-[20px]'>
                <div className='left-side p-[30px] w-1/2'>
                    <h6 className='text-[14px] text-[#727272] font-bold'>App support</h6>
                    <h4 className='text-[54px] text-[#F7F7F7] font-bold mt-[10px]'>Your Companion </h4>
                    <h4 className='text-[54px] text-[#F7F7F7] font-bold leading-7'>  24×7 </h4>
                    <p className='text-[18px] text-[#D7D7D7] font-normal mt-[40px]'>Wherever you are, our App has your back From tracking your progress and meals to staying connected with your coach, it’s your personal guide to a healthier, stronger, and unstoppable you</p>
                    <div className='mt-[40px]'>
                        <a href="#"><button className='text-[#136BD0] border-[#136BD0] bg-[#136BD033] border px-5 py-2 rounded flex items-center signup-btn hover:bg-[#136BD0] hover:text-[#fff] transition-all duration-300 ease-in-out'>Download App Now! <span className='ml-3'><img src={arrow} alt="" /></span></button></a>
                    </div>
                </div>
                <div className='right-side w-1/2'>
                    <img src={appstoreImage} alt="" className='w-full'/>
                </div>
            </div>
            {/* <div className='flex justify-between items-center gap-5 mt-[40px]'>
                <img src={App1} alt="" className='w-full'/>
                <img src={App2} alt="" className='w-full'/>
                <img src={App3} alt="" className='w-full'/>
            </div>
            <div className='flex justify-between items-center gap-5 mt-[40px]'>
                <img src={App4} alt="" className='w-full'/>
                <img src={App5} alt="" className='w-full'/>
                <img src={App6} alt="" className='w-full'/>
            </div> */}
        </div>
    </div>
  )
}

export default AppStore
