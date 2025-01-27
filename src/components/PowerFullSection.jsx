import app from "../assets/images/app-management.webp";
import autommation from "../assets/images/automation.webp";
import remote from "../assets/images/remote-access.webp";
import zero from "../assets/images/zero-touch.webp";
import integration from "../assets/images/integrations.webp";
import endpoint from "../assets/images/endpoint-security.webp";


const PowerFullSection = () => {
  return (
    <div className="py-[60px] lg:py-[80px] relative" id="features">
        <section>
            <div className="w-[88%] mx-auto max-w-[1300px]">
                <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[40px] md:pb-[60px] max-w-[800px] mx-auto">Powerful endpoint management, built for the devices you choose</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] xl:gap-[80px]">
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={zero} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">Zero-touch Enrollment</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                    </div>
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={autommation} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">Automation</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                    </div>
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={remote} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">Remote Access Management</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.</p>
                    </div>
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={endpoint} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">Endpoint Security and Compliance</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</p>
                    </div>
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={integration} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">Integrations</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.</p>
                    </div>
                    <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                        <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                            <img src={app} alt="" />
                        </div>
                        <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">App Management</h2>
                        <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default PowerFullSection
