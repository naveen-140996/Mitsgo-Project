import { useState, useRef } from "react";
import android from "../assets/images/android.webp";
import ios from "../assets/images/ios.webp";
import macos from "../assets/images/macOs.webp";
import windows from "../assets/images/windows.webp";
import tvos from "../assets/images/tvOs.webp";
import fireos from "../assets/images/fireOs.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultiPlatform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null); // Reference to the slider

  const images = [
    { id: 1, image: android, alt: "slide 1" },
    { id: 2, image: ios, alt: "slide 2" },
    { id: 3, image: macos, alt: "slide 3" },
    { id: 4, image: windows, alt: "slide 4" },
    { id: 5, image: tvos, alt: "slide 5" },
    { id: 6, image: fireos, alt: "slide 6" },
  ];

  const tabs = [{tab:"Andriod",p:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",a:"Try Hexnode on your endpoints"},
    {tab:"Ios",p:"Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",a:"Try Hexnode on your endpoints"},
    {tab:"macOs",p:"Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",a:"Try Hexnode on your endpoints"},
    {tab:"Windows",p:"Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",a:"Try Hexnode on your endpoints"},
    {tab:"tvOs",p:"Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",a:"Try Hexnode on your endpoints"},
    {tab:"fireOs",p:"Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",a:"Try Hexnode on your endpoints"}];

  const sliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    arrows: false,
    dots: false,
    beforeChange: (current, next) => setActiveTab(next), // Sync activeTab with the slider
  };

  const handleTabClick = (index) => {
    setActiveTab(index); // Update the active tab
    sliderRef.current.slickGoTo(index); // Navigate to the corresponding slide
  };

  return (
    <div id="platforms">
      <section className="py-[60px] lg:pt-[80px] lg:pb-[80px] bg-[#f7f7f7] relative">
        <div className="w-[88%] mx-auto max-w-[1300px]">
          <h2 className="antialiased text-[40px] max-sm:text-[32px] leading-[40px] text-[#020a19] text-center font-bold pb-5">
            Multi-platform Endpoint Management
          </h2>
          <p className="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center">
            Devices of varying platforms? Hexnode thrives in a diverse environment.
          </p>

          <div className="flex items-start justify-between pt-[50px]  verticalTabSlider_content-layout-wrapper__WReDd">
            {/* Left Side - Slider */}
            <div
              className={`relative w-full lg:w-[40%] overflow-hidden`}
              style={{ position: "sticky"
                     , top:"125px" 
                     }}
            >
              <div className="w-[88%] mx-auto  overflow-hidden verticalTabSlider_image-container--sm__RSLcl active block my-5">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {images.map((image) => (
                    <div key={image.id} className="rounded-[20px] overflow-hidden transition-all duration-300 ease-out inline-block opacity-100">
                      <img src={image.image} alt={image.alt} className="w-full h-auto rounded-lg" loading="lazy" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Right Side - Tabs */}
            <div className="shrink-0 w-full relative pl-10 max-sm:pl-[0] verticalTabSlider_content-wrapper__NUsI_">
              {tabs.map((tab, index) => (

                
                <div key={index}>
                {activeTab === index && (
                    <div className="block lg:hidden mb-4">
                      <img
                        src={images[index].image}
                        alt={images[index].alt}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={`relative group  verticalTabSlider_item__s8w6Z  ${activeTab === index ? "active px-[30px] rounded-[20px] border border-[#e5e7eb] bg-white " : "border-b border-[#e5e7eb] mx-[30px] max-sm:mx-[0] px-[30px]"} ${index === tabs.length - 1 ? "last:border-b-0" : ""}`}  onClick={() => handleTabClick(index)}>
                    <h3 className="cursor-pointer text-[24px] font-bold text-left transition-all duration-300 ease-in-out py-[20px] verticalTabSlider_title__KnCaN"> {tab.tab}</h3>
                      <div className={`block relative h-0 overflow-hidden transition-all duration-300 ease-out mobile-media-height ${activeTab === index ? " active lg:h-[200px] pb-[30px] md:h-[312px] max-sm:h-[240px]" : "lg:h-[0px] md:h-[0] max-sm:h-[0]"}`}>
                          <div className="pb-[30px]">
                              <p className="text-[18px] leading-[28px] font-normal pt-2.5 max-sm:mb-[10px] lg:mb-[10px] md:mb-[10px] verticalTabSlider_description__TEApi">{tab.p}</p>
                              <a rel="noreferrer" className="text-[18px] text-[#dd0735] md:text-[20px] leading-[28px] font-semibold   mt-5 verticalTabSlider_link__tYUm9" href="https://www.hexnode.com/mobile-device-management/cloud/signup/">{tab.a}</a>
                          </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiPlatform;
