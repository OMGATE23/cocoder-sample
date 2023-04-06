import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-textColor ">
      <div className="grid w-fit lg:w-4/5 mx-auto py-16 px-12 gap-8 grid-cols-2 md:grid-cols-4 justify-items-start lg:justify-items-center">
        <div className="">
          <h4 className="text-lg pb-2 border-b-4 border-themeLightest">
            Organization
          </h4>
          <ul className="mt-4">
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">About Us</a>{" "}
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">F.A.Q</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg pb-2 border-b-4 border-themeLightest" >Community</h4>
          <ul className="mt-4">
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Hackathons</a>{" "}
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Blogs</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Open Source</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Events</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg pb-2 border-b-4 border-themeLightest">Socials</h4>
          <ul className="mt-4">
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Instagram</a>{" "}
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">LinkedIn</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Github</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg pb-2 border-b-4 border-themeLightest">Contacts</h4>
          <ul className="mt-4">
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Discord</a>{" "}
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Telegram</a>
            </li>
            <li className="text-base my-2 w-content">
              <a className="hover:border-b-2" href="">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
