import youtube from "../assets/images/youtube.png";
import faceBook from "../assets/images/facebook.png";
import instagaram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

const Footer = () => {
	return (
		<div className="mb-[30px]">
			<div className=" p-[30px_0] sm:p-[20px_0]">
				<div className="w-[88%] mx-auto md:max-w-[1300px]">
					<div className="flex justify-between items-center w-full">
						<div className="">
							<p className="text-[14px] text-[#727272] leading-[24px] text-text-default font-medium m-0">
								© 2023 MEDFITS, All Rights Reserved
							</p>
						</div>
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
		</div>
	);
};

export default Footer;
