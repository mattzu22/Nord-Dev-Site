"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import teste from "../../assets/cybersecurity.svg";
import teste2 from "../../assets/design.svg";
import { Pagination, EffectCoverflow } from "swiper/modules";

export function Projects() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center ">
      <h2 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] mb-[1rem] text-center flex justify-center items-center gap-[1.9rem] text-[3.5rem]">
        Nossos
      </h2>
      <h3 className="text-[3.6rem] font-bold">Projetos</h3>

      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>

      {/* <div className="flex overflow-hidden w-[1440px] gap-[2.1rem] justify-center min-h-[40vh] mt-[4rem]">
        <div>
          <img
            className="max-w-[200px]"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </div>
        <div>
          <img
            className="w-[200px]"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </div>
        <div>
          <img
            className="w-[200px]"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </div>
        <div>
          <img
            className="w-[200px]"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-[200px]"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </div>
      </div> */}
    </section>
  );
}
