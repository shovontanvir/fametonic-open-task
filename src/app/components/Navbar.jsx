import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import burgerMenu from "../../../public/burger-menu.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-start container my-8">
      <div className="basis-full md:basis-1/2 flex items-center justify-center md:justify-start relative">
        <Image
          src={logo}
          alt="fametonic open"
          className="w-[6.6875rem] h-auto md:w-[10.625rem]"
        />
        <Image
          src={burgerMenu}
          alt="fametonic open"
          className="absolute right-4 block md:hidden"
        />
      </div>
      {/* show only in medium and large screens */}
      <div className="basis-1/2 hidden md:flex justify-end items-center text-lg text-[#A9A9A9] font-semibold">
        <Link href="#">About us</Link>
        <Link href="#" className="ml-12">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
