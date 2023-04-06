import React from "react";
import heroImg from "../../assets/hero-img.svg";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
const Hero = () => {
  return (
    <div className=" flex text-textColor flex-col-reverse lg:flex-row items-center justify-around w-3/4 mx-auto pb-12 h-[85vh]">
      <div className=" py-2 lg:py-8 w-full lg:w-2/3">
        <div className=" pt-8 h-full font-bold text-5xl text-center lg:text-7xl lg:text-left">
          Join CoCode and become a part of this exciting community
        </div>
        <div className="bg-none mt-6 mx-auto text-base w-fit lg:ml-0">
          <a href="https://discord.gg/faWEWbTR" className="block text-center transition-all duration-300 w-36  py-1 text-textColor hover:text-white hover:bg-textColor border-solid border-[3px] rounded-lg border-textColor  bg-none">
            <span className="text-lg  font-[600] ">Join now</span>{" "}
          </a>
        </div>
      </div>
      <div className="mt-4">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
