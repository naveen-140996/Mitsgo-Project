import  { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <>
      <div className={` ${isScrolled ? 'sticky top-0 z-50 bg-[#fff] w-full p-4 sticky-header' : ''} ${isMenuOpen ? "nav-open" : ""}`}>
        <header className={`${isScrolled ? ' nav-header' : 'w-full z-[102] left-[0px] nav-header header-wrap p-4' }`}>
          <div className="w-[88%] mx-auto md:max-w-[1300px] py-2">
              <div className="flex justify-between items-center">
                  <div className="flex items-center left-side-content">
                    <a className="logo inline-block max-w-[121px] relative z-[100] xl:z-[102] xl:mt-[5px] xl:mb-[auto]" aria-label="Hexnode" href="https://www.hexnode.com/"><svg version="1.1" className="fill-white w-[121px] nav-fill-svg" x="0px" y="0px" viewBox="0 0 120.9 25"> <g id="hex__logo_Layer_1"> </g> <g id="hex__logo_art_2"> <g id="hex__logo"> <g> <path className="hex__logo_st0" d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23                    c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9                    c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1                    C12.6,10.5,10.5,9,8.3,8.7z"></path> <path className="hex__logo_st0" d="M78.2,8.5c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.8,2-5.2,2.4c-2.3,2.3-2.4,5.2-2.4,5.7c0,0.9,0.1,3.3,1.9,5.4                    c1.3,1.5,3.3,2.5,5.7,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0v0c3.4-0.1,5.7-2.6,5.8-2.7c0.3-0.3,1.9-2.4,1.9-5.4                    C85.8,12.4,82.5,8.8,78.2,8.5z M81.7,16.8c-0.1,2.3-2.1,4.1-4.4,4c-2.3-0.1-4.2-2-4.1-4.3c0.1-2.3,2.1-4.1,4.4-4                    C80,12.5,81.8,14.5,81.7,16.8z"></path> <path className="hex__logo_st0" d="M59.8,8.7c-1.5,0-2.9,0.4-4.1,1.2c-0.3-0.8-1-1.3-1.9-1.3c-1.1,0-2,0.9-2,2l0,12.2c0,1.1,0.9,2,2,2                    c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.7,1.7-1.7l0-6.9c0-0.1,0.1-0.3,0.2-0.6c0-0.1,0.2-0.7,0.3-1                    c0.4-0.9,1.1-1.4,1.3-1.5c0.8-0.5,1.5-0.6,1.7-0.6c0.6,0,1,0.1,1.3,0.1c0.2,0.1,1,0.3,1.6,0.9c1,1,1.2,2.3,1.2,2.6                    c0,2.3,0,4.6,0,6.9c0,0.2,0.1,0.7,0.6,1.1c0.6,0.5,1.2,0.5,1.3,0.5h0c0.9,0,1.7-0.7,1.7-1.7l0-7.3c-0.1-0.8-0.3-2.1-1.1-3.4                    C65.8,12,63.7,8.8,59.8,8.7z"></path> <path className="hex__logo_st0" d="M118.2,10.3c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C121.3,15,120.3,12,118.2,10.3z M110.8,13.4                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C109.9,14.2,110.3,13.8,110.8,13.4z"></path> <path className="hex__logo_st0" d="M38.2,16.1c1-1,1.9-2,2.9-3c-1.2-1.2-2.4-2.4-3.7-3.6c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9                    C35.7,13.6,36.9,14.8,38.2,16.1z"></path> <path className="hex__logo_st0" d="M49.1,9.1c-0.8-0.8-2.1-0.7-2.8,0.1L34.5,21.5c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1l4.3-4.5                    l4.4,4.4c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-4.4-4.5l4.6-4.8C50,11.1,49.9,9.9,49.1,9.1z"></path> <path className="hex__logo_st0" d="M101.7,0c-1.1,0-2,0.9-2,2l0,8c-1.1-0.8-2.5-1.3-3.9-1.4v0c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.7,2-5.1,2.4                    C87,13.2,87,16.1,87,16.6c0,0.9,0.1,3.3,1.9,5.4c1.3,1.5,3.2,2.5,5.6,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0l0,0                    c1.8-0.1,3.2-0.8,4.2-1.5c0.2,0.8,1,1.4,1.9,1.4c1.1,0,2-0.9,2-2l0-20.8C103.6,0.9,102.7,0,101.7,0z M99.4,16.8                    c-0.1,2.4-2.1,4.3-4.5,4.2c-2.4-0.1-4.2-2.1-4.1-4.5c0.1-2.4,2.1-4.3,4.5-4.2C97.7,12.4,99.5,14.4,99.4,16.8z"></path> <path className="hex__logo_st0" d="M29.3,10.4c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C32.4,15,31.4,12.1,29.3,10.4z M21.9,13.5                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C21,14.3,21.4,13.8,21.9,13.5z"></path> </g> </g> </g> </svg></a>
                    <div className="xl:block lg:hidden md:hidden max-sm:hidden">
                      <ul className={`flex items-center`}>
                          <a href="#why-hexnode"  className={` ${isScrolled ? 'text-[#000] text-[15px] ml-[30px] font-normal' : 'text-[#fff] ml-[30px] font-mulish font-normal text-[15px] nav-elements'}`}><li className="mt-3">Why Hexnode</li></a>
                          <a href="#features"  className={` ${isScrolled ? 'text-[#000] text-[15px] ml-[30px] font-normal' : 'text-[#fff] ml-[30px] font-mulish font-normal text-[15px] nav-elements'}`}><li  className="mt-3">Features</li></a>
                          <a href="#platforms"  className={` ${isScrolled ? 'text-[#000] text-[15px] ml-[30px] font-normal' : 'text-[#fff] ml-[30px] font-mulish font-normal text-[15px] nav-elements'}`}><li  className="mt-3">PlatForms</li></a>
                          <a href="#customers"  className={` ${isScrolled ? 'text-[#000] text-[15px] ml-[30px] font-normal' : 'text-[#fff] ml-[30px] font-mulish font-normal text-[15px] nav-elements'}`}><li  className="mt-3">Customers</li></a>
                      </ul>
                    </div>
                   
                  </div>
                  <div className="right-side-btn xl:block lg:flex md:flex lg:justify-between md:justify-between md:items-center lg:items-center max-sm:block ">
                    <a href="#" className="text-[#fff] text-[15px] px-5 py-4 font-mulish font-medium bg-[#dd0735] rounded-[3px] lg:block max-sm:hidden md:hidden">14 DAY FREE TRAIL</a>
                      <div className="xl:hidden lg:block max-sm:block max-md:block lg:ml-[20px] md:ml-[20px]">
                        <button className="hamburger--btn relative z-[101] self-end sm:self-center" onClick={handleHamburgerClick}>
                          <span className="border-0 w-[24px] h-[18px] bg-[transparent] flex relative z-[199] m-0 cursor-pointer before:absolute  before:content-[''] before:w-[100%] before:h-[3px] before:rounded-[100px] before:left-[0px] before:bg-[#fff] after:absolute after:content-[''] after:w-[100%] after:h-[3px] after:rounded-[100px] after:left-[0px] after:bg-[#fff] before:bottom-[0px] after:top-[0px] after:mt-[0px] nav-bar_menu__eM2RY">
                          <span className="w-[100%] h-[3px] bg-[#fff] rounded-[100px] visible mb-[0px] mt-[-2px] opacity-[1] absolute left-[0px] top-[50%] translate-y-[25%]"></span>
                          </span>
                        </button>
                    </div>
                  </div>                 
              </div>
          </div>
        </header>
      </div>

      <div className={`right-side-slider transition-transform duration-300 ease-in-out fixed top-0 right-0 bottom-0 bg-[#fff] text-white flex items-center justify-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <ul className="text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset]">
          <li className='group text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default nav-bar_dropdown__qT4xK'><a href="#">Why Hexnode</a></li>
          <li className='group text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default nav-bar_dropdown__qT4xK'><a href="#">Features</a></li>
          <li className='group text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default nav-bar_dropdown__qT4xK'><a href="#">Platforms</a></li>
          <li className='group text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default nav-bar_dropdown__qT4xK'><a href="#">Customers</a></li>
          <li className="text-center mt-3"><a href="#" className="text-[#fff] bg-[#dd0735] px-[40px] py-4 rounded-[3px] w-full">14 days free trail</a></li>
        </ul>
      </div>
       
    </>
  )
} 

export default Header
