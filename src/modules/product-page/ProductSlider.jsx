/* eslint-disable react/prop-types */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination } from "swiper/modules";

import 'swiper/css/pagination';

export const ProductSlider = ({ images }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="product-slider" id="card-slider">
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          horizontalClass: "swiper-pagination-vertical",
        }}
        modules={[Pagination, Controller]}
        className="product-swiper"
        spaceBetween={33}
        slidesPerView="auto"
        grabCursor={true}
        a11y={false}
        freeMode={true}
        speed={2000}
        loop={true}
        controller={{ control: controlledSwiper }}
      >
        {images.small?.map((image, index) => (
          <SwiperSlide className="product-swiper__slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>
      </Swiper>

      <Swiper
        className="product-slider__image"
        direction="vertical"
        modules={[Controller]}
        spaceBetween={0}
        slidesPerView="auto"
        grabCursor={true}
        a11y={false}
        freeMode={true}
        speed={2500}
        loop={true}
        onSwiper={setControlledSwiper}
      >
        {images.big?.map((image, index) => (
          <SwiperSlide className="product-swiper__img" key={index}>
            <img className="card__img" src={image} alt={`Image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
