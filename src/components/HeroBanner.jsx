import BannerImg from "../assets/images/banner.webp";
import BannerImg1 from "../assets/images/baner1.webp";
const HeroBanner = () => {
  return (
    <div className="bg-[#090f1d] pt-[80px] pb-[60px] max-sm:pt-[20px]">
        <div className=" w-[88%] mx-auto md:max-w-[1300px]">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
                <div className=" flex flex-col w-full max-w-full md:max-w-[554px] order-2 xl:order-1">
                    <h1 className="text-[rgb(191,193,197,60%)] text-[16px] leading-[20px] xl:text-left xl:mt-[0] text-center mt-[30px] font-mulish font-semibold mb-[10px]">Unified Endpoint Management</h1>
                    <h2 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold font-mulish"> Gain control and visibility over your endpoints</h2>
                    <div className="mb-[20px] mt-[20px]"><p className="text-[rgb(255,255,255,75%)] font-normal text-[18px] leading-[28px] text-center xl:text-left font-mulish">Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.</p></div>
                    <div className="flex  items-center lg:justify-start md:justify-center  max-sm:flex-col">
                        <div className="w-[250px] max-sm:w-full">
                            <input type="text" placeholder="Email" className="rounded-[3px] outline-none w-full px-2 h-[52px]"/>
                        </div>
                        <div className="w-[200px] ml-2  max-sm:w-full max-sm:mt-3 max-sm:ml-0 ">
                            <button className="bg-[#dd0735] lets-try-btn text-[#fff] font-mulish font-medium  h-[52px] w-full rounded-[3px]">LET'S TRY IT OUT!</button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full md:max-w-[610px] order-1 xl:order-2 relative"> 
                    <img src={BannerImg} alt="" />
                    <div className="absolute w-full h-full top-[0px]  pointer-events-none " style={{ zIndex: 9 }} >
                        <img src={BannerImg1} alt="Hexnode UEM"  width="393" height="753" decoding="async" data-nimg="1" className="w-full h-full"  />
                    </div>
                   <div className="group absolute bg-[#fcd598] rounded-[21px] top-[14%] left-[5%] w-[48%] h-[40px] max-sm:h-[26px]  p-[5px_10px_5px_25px] overflow-hidden banner_tick-animate-wrap__7tPRE">
                   <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                    <div className="w-[19px] banner-tick h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] rounded-full bg-[#fff]">
                        <div className="w-[8px] h-[8px] flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021" className=""><path id="Path_4891" data-name="Path 4891" d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#db962c" stroke-width="2"></path></svg>
                        </div>
                    </div>
                    <span className="text-[8px] absolute ml-4 leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[27px] text-left z-1 undefined font-mulish">Password policy applied</span>
                   </div>
                   <div className="group flex bg-[#C3E1E7] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[40%] right-[-2%] sm:right-[-1%] md:right-[-8%] overflow-hidden banner_tick-animate-wrap__7tPRE w-[40%] h-[40px] max-sm:h-[26px]">
                    <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                        <div className="w-[19px] banner-tick h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] rounded-full bg-[#fff]">
                            <div className="w-[8px] h-[8px] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021" className=""><path id="Path_4891" data-name="Path 4891" d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#db962c" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <span className="text-[8px] absolute ml-4 leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[27px] text-left z-1 font-mulish undefined">TvOS Kiosk Active</span>
                    </div>
                    <div className="group flex bg-[#BCDCBE] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute bottom-[13%] right-[26%] z-5 overflow-hidden banner_tick-animate-wrap__7tPRE  w-[40%] h-[40px] max-sm:h-[26px]" style={{ zIndex: 10 }}>
                    <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                        <div className="w-[19px] banner-tick h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] rounded-full bg-[#fff]">
                            <div className="w-[8px] h-[8px] flex justify-center items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021" className=""><path id="Path_4891" data-name="Path 4891" d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#db962c" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <span className="text-[8px] absolute ml-4 leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[27px] text-left z-1 font-mulish undefined ">Device Enrolled</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
