import React from 'react'
import footerLogo from '../assets/images/footerLogo.png';
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import location from "../assets/images/location1.png"
const PrevFooter = () => {
  return (
    <div className='bg-[#272727] p-[40px]'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between '>
                <div className='w-1/2'>
                    <img src={footerLogo} alt="footerLogo" />
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>At MedFits, we redefine fitness. Our focus isn’t just on transformation—it’s about building a healthy lifestyle that makes transformation a natural byproduct.</p>
                    <div className='flex items-center mt-[20px]'>
                        <img src={location} alt="" />
                        <p className='text-[#D7D7D7] text-[14px] font-normal ml-3'>56/78, 14thA Cross, 2nd Main, Garden Layout, JP Nagar 7th Phase</p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <img src={email} alt="" />
                        <p className='text-[#D7D7D7] text-[14px] font-normal ml-3'>medfits@org.tn@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <img src={phone} alt="" />
                        <p className='text-[#D7D7D7] text-[14px] font-normal ml-3'>(+91) 98765 43210</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Services</h3>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Science-Based Training</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Ancient Wisdom Re-imagined</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Holistic Nutrition</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Focus on Longevity</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Specialised Health Programs</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>24×7 Support with MedFits App</p>
                </div>
                <div>
                    <h3 className='text-[#F7F7F7] text-[20px] font-bold'>Contact Us</h3>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Science-Based Training</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Ancient Wisdom Re-imagined</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Holistic Nutrition</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Focus on Longevity</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>Specialised Health Programs</p>
                    <p className='text-[#D7D7D7] text-[14px] font-normal mt-[20px]'>24×7 Support with MedFits App</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrevFooter
