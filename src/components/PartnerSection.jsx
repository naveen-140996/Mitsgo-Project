import partner1 from "../assets/images/idc.png";
import partner2 from "../assets/images/gartner.png";
import partner3 from "../assets/images/forrester.webp";
const PartnerSection = () => {
  return (
    <div>
        {/* partner Section */}
         <section className='bg-[#1a1c2b] lg:py-[30px] md:py-[30px]'>
            <div className=" w-[88%] mx-auto md:max-w-[1300px]">
           
                <div className="flex flex-col max-md:items-center md:flex-row  justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
                    <a href="" className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap">
                        <div  className="flex flex-col items-center md:items-baseline banner_accolades-content">
                            <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                <img src={partner1} alt=""/>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center font-mulish md:text-left">Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                            </div>
                        </div>
                    </a>
                    <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
                    <a href="" className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap">
                        <div  className="flex flex-col items-center md:items-baseline banner_accolades-content">
                            <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                <img src={partner2} alt=""/>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center font-mulish md:text-left">Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                            </div>
                        </div>
                    </a>
                    <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
                    <a href="" className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap">
                        <div  className="flex flex-col items-center md:items-baseline banner_accolades-content">
                            <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                <img src={partner3} alt=""/>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center font-mulish md:text-left">Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
         </section>
    </div>
  )
}

export default PartnerSection
