import React from 'react'
import medival from "../assets/images/medieval-knight-svgrepo-com 1.png";
import gym from "../assets/images/gym-svgrepo-com 1.png";
import ligtning from "../assets/images/lightning-1-svgrepo-com 1.png";
import circle from "../assets/images/x-circle.png";
import checkCircle from  "../assets/images/check-circle.png";
const Pricing = () => {
  return (
        <div className='bg-[#F7F7F7]'>
            <div className='mx-auto w-[80%] pt-[50px] pb-[50px]'>
                <div className='flex justify-between items-center w-full'>
                    <div className='bg-[#fff] border-[#D7D7D7] border p-[40px] rounded-[20px] shadow-lg relative bg-after w-[30%]'>
                        <div className='flex justify-end items-center bg-[#136BD0] p-4 absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[20px]'>
                            <p className='text-[#fff] text-[14px]'>Basic Plan</p>
                        </div>
                        <img src={gym} alt="" className='mt-[30px]'/>
                        <h3 className='text-[#727272] text-[20px] mt-[20px] font-bold'>Strength Starter</h3>
                        <h3 className='text-[24px] font-bold mt-[20px]'>$ 12 / <span className='text-[#727272] text-[16px]'>month</span></h3>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#727272] text-[16px] ml-3'>Personal Trainer</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#727272] text-[16px] ml-3'>Diet Menu</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#727272] text-[16px] ml-3'>Nutrition Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#727272] text-[16px] ml-3'>Workout Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#727272] text-[16px] ml-3'>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#136BD0] border-[#D7D7D7] border p-[40px] rounded-[20px] shadow-lg relative bg-after w-[30%]'>
                        <div className='flex justify-end items-center bg-[#fff] p-4 absolute top-[-1px] right-[-1px] rounded-tr-[20px] rounded-bl-[20px]'>
                            <p className='text-[#136BD0] text-[14px]'>Best Plan</p>
                        </div>
                        <img src={ligtning} alt="" className='mt-[30px]'/>
                        <h3 className='text-[#D7D7D7] text-[20px] mt-[20px] font-bold'>Power Surge</h3>
                        <h3 className='text-[24px] text-[#fff] font-bold mt-[20px]'>$ 20 / <span className='text-[#D7D7D7] text-[16px]'>month</span></h3>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Personal Trainer</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={circle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Diet Menu</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Nutrition Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Workout Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#000] border-[#D7D7D7] border p-[40px] rounded-[20px] shadow-lg relative bg-after w-[30%]'>
                        <div className='flex justify-end items-center bg-[#136BD0] p-4 absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[20px]'>
                            <p className='text-[#fff] text-[14px]'>Premium Plan</p>
                        </div>
                        <img src={medival} alt="" className='mt-[30px]'/>
                        <h3 className='text-[#d7d7d7] text-[20px] mt-[20px] font-bold'>Titan Mode</h3>
                        <h3 className='text-[24px] text-[#D7D7D7] font-bold mt-[20px]'>$ 32 / <span className='text-[#727272] text-[16px]'>month</span></h3>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Personal Trainer</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Diet Menu</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Nutrition Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Workout Plan</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <img src={checkCircle} alt="" />
                            </div>
                            <div>
                                <p className='text-[#D7D7D7] text-[16px] ml-3'>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
   
  )
}

export default Pricing
