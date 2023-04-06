import React, { useState } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import discordIcon from "../../assets/discord-icon.svg";
import { toast } from "react-toastify";
const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState("hidden");

  function showMenu(e) {
    e.preventDefault()
    console.log(menuHidden)
    setMenuHidden((prev) => {
      if (prev === "hidden") {
        return "flex";
      } else return "hidden";
    });
  }
  return (
    <nav className=" sticky top-0 left-0 z-10 font-poppins shadow-xl  bg-white p-0 ">
      <div className=" h-20 flex items-center justify-between">
        <div className="flex items-center ml-4  lg:mr-0 text-textColor">
          <RocketLaunchIcon width={30} className="inline" />
          <h1 className="font-bold text-4xl inline ">CoCoder</h1>
        </div>

        <div className="hidden lg:flex ml-4 font-semibold text-secondaryTextColor items-center justify-around text-lg w-1/3 ">
          <a
            href="#"
            onClick={() => toast.success('Pages to be added soon!')}
            className="transition-all hover:border-b-2 hover:translate-y-[-5px]  duration-100 border-themeLinks my-8"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => toast.success('Pages to be added soon!')}
            className="hover:border-b-2 hover:translate-y-[-5px]  duration-100 border-themeLinks my-8"
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => toast.success('Pages to be added soon!')}
            className="hover:border-b-2 hover:translate-y-[-5px]  duration-100 border-themeLinks my-8"
          >
            Hackathons
          </a>
          <a
            href="#"
            onClick={() => toast.success('Pages to be added soon!')}
            className="hover:border-b-2 hover:translate-y-[-5px]  duration-100 border-themeLinks my-8"
          >
            Blogs
          </a>
        </div>

        <div className="hidden lg:block  hover:cursor-pointer ">
          <div className=" transition-all font-semibold duration-500 outline outline-2 outline-textColor text-textColor rounded-md mr-4 px-4 py-2 hover:bg-textColor hover:outline-none hover:text-white">
            <a
              className="hidden lg:flex item items-center justify-around"
              href="https://discord.gg/faWEWbTR"
            >
              <p className="text-lg">Join Our Discord </p>

              <img className="w-8 ml-4" src={discordIcon} />
            </a>
          </div>
        </div>
        <div className="mr-8 lg:hidden" onClick={showMenu}>
          <button className="block hamburger focus:outline-none lg:hidden self-end">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          id="menu"
          className={menuHidden +" w-1/3 absolute mx-auto  flex-col items-center self-end mt-4 py-8 space-y-6 font-bold bg-white text-lg text-black  sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Hackathons</a>
          <a href="">Blogs</a>
          <a href="">Join Discord</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
