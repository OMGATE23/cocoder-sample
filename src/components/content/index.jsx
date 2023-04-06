import React from "react";
import hackathon from "../../assets/hackathon.svg";
import blogs from "../../assets/blogs.svg";
import opensource from "../../assets/opnsource.svg";
import { toast } from "react-toastify";


const Content = () => {
  const contents = [
    {
      image: hackathon,
      title: "Exciting Hackathons",
      description: "Check out our hackathons and win amazing prizes!",
      url: "#",
    },
    {
      image: blogs,
      title: "Informative Blogs",
      description: "Check out our blogs for up-to-date and latest information!",
      url: "#",
    },
    {
      image: opensource,
      title: "Amazing Open-Source",
      description:
        "Check out our open source projects and help our community out!",
      url: "#",
    },
  ];
  return (
    <div className="">
      <h2 className="mx-auto pt-20 w-3/4 text-5xl lg:7xl text-center  font-bold text-textColor">
        Check out our content
      </h2>
      <div className=" w-full xl:w-4/5 p-8 py-12 pb-28 mx-auto grid grid-cols-1 text-center justify-items-center lg:grid-cols-3 gap-6 ">
        {contents.map((content) => (
          <div onClick={() => toast.success('Pages to be added soon!')} className=" md:flex lg:block rounded-xl items-center md:w-[650px] md:h-[300px] w-[350px] lg:w-[350px] h-[450px] lg:h-[450px] shadow-xl cursor-pointer mx-4 transition-all duration-500 bg-white  hover:bg-primaryColor hover:scale-105">
            <div className="w-4/5 lg:w-4/5 md:w-1/2 md:ml-4 mx-auto my-4">
              <img src={content.image} alt="" />
            </div>
            <div className="mx-2">
              <h3 className="text-2xl font-semibold text-textColor">
                {content.title}
              </h3>
              <p className="text-lg my-2  text-secondaryTextColor">
                {content.description}
              </p>
              <a
                href={content.url}
                onClick={() => toast.success('Pages to be added soon!')}
                className="flex items-center justify-center mx-auto my-4 text-lg bg-secondaryTextColor rounded-xl text-white font-semibold h-12 w-36  transition-all duration-500 hover:bg-textColor"
              >
                Check Out
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
