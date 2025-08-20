import Image from "next/image";
import bannerImage from "../../../public/banner-image.png";
import BannerList from "./BannerList";
import BannerHeading from "./BannerHeading";
import BannerButton from "./BannerButton";

const HomeBanner = () => {
  return (
    <div className="container flex flex-wrap items-center lg:h-[calc(100vh-158px)] relative py-10 lg:py-0">
      <div className="basis-full lg:absolute lg:inset-0 flex justify-end lg:px-24">
        <Image src={bannerImage} alt="fametonic banner" />
      </div>
      <div className="basis-full lg:basis-3/5 relative">
        <BannerHeading />

        <BannerList />

        <BannerButton />
      </div>
    </div>
  );
};

export default HomeBanner;
