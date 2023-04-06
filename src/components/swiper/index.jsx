import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImg from "../../assets/profile-img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Slider = () => {
  const testimonials = [
    {
      name: "Arjun Sinha",
      title: "Works at Google",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste inventore voluptatum ex beatae quis nemo laborum eaque aliquid? Eaque modi rem quam eum voluptatum exercitationem aliquid voluptates ea placeat.",
    },
    {
      name: "Anirudh Govind",
      title: "Works at Facebook",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste inventore voluptatum ex beatae quis nemo laborum eaque aliquid? Eaque modi rem quam eum voluptatum exercitationem aliquid voluptates ea placeat.",
    },
    {
      name: "Manish Kumar",
      title: "Works at Microsoft",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste inventore voluptatum ex beatae quis nemo laborum eaque aliquid? Eaque modi rem quam eum voluptatum exercitationem aliquid voluptates ea placeat.",
    },
    {
      name: "Amit Pathak",
      title: "CEO of NeoGenesis",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste inventore voluptatum ex beatae quis nemo laborum eaque aliquid? Eaque modi rem quam eum voluptatum exercitationem aliquid voluptates ea placeat.",
    },
    {
      name: "Akashdeep Singh",
      title: "Works at Amazon",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste inventore voluptatum ex beatae quis nemo laborum eaque aliquid? Eaque modi rem quam eum voluptatum exercitationem aliquid voluptates ea placeat.",
    },
  ];

  return (
    <div className="h-[750px] bg-white">
      <div className="mt-8">
        <h2 className="text-center pt-20 text-textColor text-7xl font-bold">
          Testimonials
        </h2>
      </div>

      <div className="mt-8 ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="w-1/2 h-[450px] "
        >
          {testimonials.map((item) => {
            const { name, title, text } = item;

            return (
              <SwiperSlide className=" text-center bg-white ">
                <div className="w-1/2 h-[450px] py-8 mt-[2rem] mx-auto  text-ellipsis bg-fadedPrimaryColor shadow-xl">
                  <img src={profileImg} className="rounded-full w-16 mx-auto" />
                  <h4 className="text-2xl text-textColor mt-4">{name}</h4>
                  <p className="text-lg text-secondaryTextColor">{title}</p>
                  <p className="mt-4 w-4/5 mx-auto text-gray-400">{text}</p>
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
