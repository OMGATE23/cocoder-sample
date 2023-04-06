import React from "react";
import heroImg from "../../assets/hero-img.svg";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
const Hero = () => {
  return (
    <div className=" flex text-textColor flex-col-reverse lg:flex-row items-center justify-around w-3/4 mx-auto h-[85vh]">
      <div className=" py-2 lg:py-8 w-full lg:w-2/3">
        <div className=" py-8 h-full font-bold text-center lg:text-6xl lg:text-left">
          Join CoCode and become a part of this exciting community
        </div>
        <div className="bg-none mx-auto text-base p-[2px] w-fit lg:mx-4">
          <button className=" w-36 px-3.5 py-1 border-solid border-[3px] rounded-lg border-textColor  bg-none">
            <span className="text-lg text-textColor font-[600] ">Join now</span>{" "}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
