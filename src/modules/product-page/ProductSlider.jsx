/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const ProductSlider = ({ images }) => {
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
        modules={[Pagination]}
        className="product-swiper"
        spaceBetween={33}
        slidesPerView="auto"
        grabCursor={true}
        a11y={false}
        freeMode={true}
        speed={2000}
        loop={true}
      >
        {images?.map((image, index) => (
          <SwiperSlide className="product-swiper__slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>
      </Swiper>

      <img
          className="card__img"
          src="public/images/new-3.jpg"
          alt="Cвитшот вставка клетка"
        />
    </div>
  );
};
