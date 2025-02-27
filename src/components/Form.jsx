import React, { useState } from "react";
import mail from '../assets/images/mail-color.png';
import phone from "../assets/images/phone-color.png";
import location from "../assets/images/location-color.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";
import line from "../assets/images/Line 12.png";
import youtube from "../assets/images/youtube.png";
import faceBook from "../assets/images/facebook.png";
import instagaram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import user from "../assets/images/user.png";
import email from "../assets/images/mail-gray.png";
import telephone from "../assets/images/phone-gray.png";
import subject from "../assets/images/subject-gray.png";
import arrow from '../assets/images/arrow.png';

const Form = () => {
    // State to store input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});


  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "This field is required";
    if (!formData.message.trim()) newErrors.message = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
    }
  };
  return (
    <div>
        <div className='flex justify-between  w-full'>
            <div className='left-side bg-[#272727] w-[50%]'>
                <div className='p-[40px]'>
                    <h4 className='text-[#727272] text-lg font-bold'>GET IN TOUCH</h4>
                    <h2 className='text-[#D7D7D7] text-[54px] font-bold'>Contact Details</h2>
                    <p className='text-[#D7D7D7] text-[16px] font-normal'>Send us an inquiry, or drop by our fitness center in person to have a look around</p>
                    <div className='w-1/2'>
                    <div className='flex items-center mt-[20px]'>
                        <img src={location} alt="" />
                        <p className='text-[#F7F7F7] text-[14px] font-bold ml-3'>Perambur, Chennai, India</p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <img src={mail} alt="" />
                        <p className='text-[#F7F7F7] text-[14px] font-bold ml-3'>medfits@org.tn@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <img src={phone} alt="" />
                        <p className='text-[#F7F7F7] text-[14px] font-bold ml-3'>+91-6369334677</p>
                    </div>
                  
                </div> 
                    <div className='bg-[#373737] p-[20px] w-full border border-[#727272] rounded-[10px] mt-[30px]'>
                        <div className='flex items-center mt-[20px]'>
                            <img src={insta} alt="" />
                            <p className='text-[#F7F7F7] text-[14px] font-bold ml-3'>@medfits.in/instagram</p>
                        </div>
                        <div className='flex items-center mt-[20px]'>
                            <img src={whatsapp} alt="" />
                            <p className='text-[#F7F7F7] text-[14px] font-bold ml-3'>+91-6369334677</p>
                        </div>
                    </div>
                    <img src={line} alt="" className='mt-[30px] w-full'/>
                    <div className='mt-[30px]'>
                        <div className="flex">
                            <a href=""><img src={youtube} alt="" className="ml-4"/></a>
                            <a href=""><img src={twitter} alt="" className="ml-4"/></a>
                            <a href=""><img src={linkedin} alt="" className="ml-4"/></a>
                            <a href=""><img src={faceBook} alt="" className="ml-4"/></a>
                            <a href=""><img src={instagaram} alt=""  className="ml-4"/></a>
                        </div>
                    </div>         
                </div>
            </div>
            <div className='right-side w-[50%]'>
                <div className='p-[40px]'>
                    <label htmlFor="Name" className='text-[#272727] text-[14px] font-medium'>NAME</label>
                    <div className='flex items-center relative'>
                        <input type="text" className='w-full text-[#A7A7A7] rounded-[5px] border border-[#D7D7D7] p-2 mt-3 font-bold relative indent-[40px] outline-none' placeholder='Enter Your Name'  value={formData.name}  onChange={handleChange}/>
                        <label htmlFor="" className='absolute left-[10px] top-[23px] '><img src={user} alt="" className='border-r-2 pr-[10px]' /></label>
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <div className='mt-[20px]'>
                        <label htmlFor="Name"  className='text-[#272727] text-[14px] font-medium'>Email</label>
                        <div className='flex items-center relative'>
                            <input type="text" className='w-full text-[#A7A7A7] rounded-[5px] border border-[#D7D7D7] p-2 mt-3 font-bold relative indent-[40px] outline-none' placeholder='Enter Your mail'  value={formData.email}  onChange={handleChange} />
                            <label htmlFor="" className='absolute left-[10px] top-[23px] '><img src={email} alt="" className='border-r-2 pr-[10px]' /></label>
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div  className='mt-[20px]'>
                        <label htmlFor="Name" className='text-[#272727] text-[14px] font-medium'>Phone</label>
                        <div className='flex items-center relative'>
                            <input type="text" className='w-full text-[#A7A7A7] rounded-[5px] border border-[#D7D7D7] p-2 mt-3 font-bold relative indent-[40px] outline-none' placeholder='Enter Your phone'  value={formData.phone}  onChange={handleChange} />
                            <label htmlFor="" className='absolute left-[10px] top-[23px] '><img src={telephone} alt="" className='border-r-2 pr-[10px]' /></label>
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                   
                    <div className='mt-[20px]'>
                        <label htmlFor="Name" className='text-[#272727] text-[14px] font-medium'>subject</label>
                        <div className='flex items-center relative'>
                            <input type="text" className='w-full text-[#A7A7A7] rounded-[5px] border border-[#D7D7D7] p-2 mt-3 font-bold relative indent-[40px] outline-none' placeholder='Enter Your Subject'  value={formData.subject}  onChange={handleChange} />
                            <label htmlFor="" className='absolute left-[10px] top-[23px] '><img src={subject} alt="" className='border-r-2 pr-[10px]' /></label>
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className='mt-[20px]'>
                        <label htmlFor="text-area" className='text-[#272727] text-[14px] font-medium'>MESSAGE</label>
                        <textarea name="type-message" placeholder='Type Messages' className='text-[#A7A7A7] text-[14px] font-medium border border-[#D7D7D7]  p-4 outline-none mt-3 w-full rounded-[5px]'  value={formData.message}
                         onChange={handleChange}></textarea>
                          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className='mt-[30px] text-center' onClick={handleSubmit}>
                        <a href="#"><button className='text-[#F7F7F7] border-[#136BD0] bg-[#136BD0] border px-5 py-2 rounded flex justify-center items-center signup-btn transition-all duration-300 ease-in-out w-full'>Send Message <span className='ml-3 '><img src={arrow} alt="" /></span></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
