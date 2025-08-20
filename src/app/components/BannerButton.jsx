import Image from "next/image";
import arrowIcon from "../../../public/chevron-right.png";

const BannerButton = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 inline-flex flex-col items-center order-2 lg:order-1 w-full lg:w-auto px-2 lg:px-0">
        <button className="flex items-center justify-center bg-[#FC004E] py-3 lg:px-24 rounded-[0.625rem] text-xl font-bold shadow-[2px_2px_10px_0px_#00E7F9] w-full md:w-5/6 lg:w-auto">
          GET STARTED
          <Image src={arrowIcon} alt="fametonic" className="ml-3" />
        </button>
        <p className="text-xs mt-3">1-minute quiz for personalized Insights</p>
      </div>
      <div className="text-[#ABABAB] mt-8 text-center lg:text-start px-10 lg:px-0">
        <p className="text-xs">
          By clicking "Get Started", you agree with Terms and Conditions,
          Privacy Policy, Subscription Terms
        </p>
        <p className="text-[0.625rem] mt-4">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default BannerButton;
