"use client";

import React from "react";
import Image from "next/image";

import enterpriseOne from "../../assets/enterpriseOne.svg";
import enterpriseTwo from "../../assets/enterpriseTwo.svg";
import enterpriseThree from "../../assets/enterpriseThree.svg";
import enterpriseFour from "../../assets/enterpriseFour.svg";
import enterpriseFive from "../../assets/enterpriseFive.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const PartnerCompanies: React.FC = () => {
  const companiesSlider = [
    enterpriseOne,
    enterpriseTwo,
    enterpriseThree,
    enterpriseFour,
    enterpriseFive,
    enterpriseOne,
    enterpriseTwo,
    enterpriseThree,
    enterpriseFour,
    enterpriseFive,
  ]

  return (
    <section className="w-full mobileSM:mt-[-100px] tabletLG:mt-[0px]  py-[2rem] my-[3rem] flex items-center text-center justify-center">
      <Swiper
        spaceBetween={0}
        loop={true}
        watchOverflow={true}
        allowTouchMove={false}
        navigation={false} 
        pagination={false} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter:false,
        }}
        speed={4650}
        breakpoints={{
          1440:{slidesPerView: 5},
          1100:{slidesPerView: 5},
          768: {slidesPerView: 4},
          425: {slidesPerView: 4},
          375: {slidesPerView: 3},
          320: {slidesPerView: 3},
        }}
        modules={[Autoplay]}
      >
        {companiesSlider.map((empresa, index) => (
          <SwiperSlide key={index}>
            <Image src={empresa} alt="Empresa Parceira" className="tabletSM:w-[60px] tabletSM:h-[60px] tabletMD:w-[70px] tabletMD:h-[70px] mobileSM:w-[50px] mobileSM:h-[50px] tabletLG:w-[75px] tabletLG:h-[75px] laptopLG:w-[85px] laptopLG:h-[85px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};