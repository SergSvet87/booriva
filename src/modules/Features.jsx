import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__wrap">
          <h2 className="features__title">Новинки</h2>
          <svg
            className="features__title-svg"
            width="65"
            height="15"
            viewBox="0 0 65 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0117645 12.5237C0.464851 9.05566 1.08783 5.30798 3.69305 2.679C5.90182 0.441571 9.24331 -0.733093 12.3016 0.497493C15.7564 1.89589 17.1722 5.36392 18.9846 8.27257C20.0606 10.0066 22.0995 12.4677 24.5348 11.9643C26.1772 11.5728 26.8568 9.89469 27.3666 8.4963C28.2727 6.20293 28.8391 3.62989 30.7647 1.89589C32.9168 -0.00592828 35.9751 0.217828 38.2405 1.83996C41.2988 3.96552 42.1483 7.60133 44.6969 10.1744C46.5092 11.9643 48.718 11.7965 50.4737 9.95065C51.8896 8.38445 52.286 6.31482 53.3621 4.52487C55.1178 1.61621 58.6292 0.944979 61.5742 2.73492C65.029 4.91642 65.4254 9.27939 64.6891 12.8593C64.406 14.3136 61.9706 13.978 62.0273 12.5237C62.0273 10.8456 62.1972 9.05567 61.6308 7.43354C60.8946 5.36392 58.2894 3.68582 56.477 5.58763C55.4576 6.65041 55.1744 8.32849 54.4948 9.61501C53.8152 10.9575 52.7957 12.188 51.6064 13.139C46.4526 16.9985 42.0917 12.244 39.5997 8.04882C38.2405 5.75545 34.7291 1.33652 32.2938 5.02827C30.9912 6.93009 30.708 9.39128 29.632 11.405C26.9701 16.4951 21.2499 15.768 17.7952 11.7965C15.5864 9.27941 14.5104 4.46893 10.999 3.29428C5.562 1.56027 3.74968 8.94379 3.2966 12.5237C2.90015 14.4255 -0.214775 14.4814 0.0117645 12.5237Z"
              fill="#1F1F1F"
            />
          </svg>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={true}
        className="features__cards"
      >
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-1.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Cвитшот вставка клетка</h3>
              <div className="card_features__price">1 099 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-2.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье прозрачное в цветочек черное
              </h3>
              <div className="card_features__price">1 299 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-3.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Бомбер Gone Crazy хаки</h3>
              <div className="card_features__price">2 499 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-4.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье-футболка рыбы в аквариуме
              </h3>
              <div className="card_features__price">899 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-1.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Cвитшот вставка клетка</h3>
              <div className="card_features__price">1 099 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-2.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье прозрачное в цветочек черное
              </h3>
              <div className="card_features__price">1 299 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-3.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Бомбер Gone Crazy хаки</h3>
              <div className="card_features__price">2 499 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-4.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье-футболка рыбы в аквариуме
              </h3>
              <div className="card_features__price">899 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-1.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Cвитшот вставка клетка</h3>
              <div className="card_features__price">1 099 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-2.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье прозрачное в цветочек черное
              </h3>
              <div className="card_features__price">1 299 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-3.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">Бомбер Gone Crazy хаки</h3>
              <div className="card_features__price">2 499 ₴</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card_features">
          <div className="card_features__fav-btn">
            <button>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z"
                  fill="#1F1F1F"
                />
              </svg>
            </button>
          </div>
          <div className="card_features__picture">
            <img
              className="card_features__img"
              src="public/images/new-4.jpg"
              alt="Cвитшот вставка клетка"
            />
          </div>
          <div className="card_features__body">
            <div className="card_features__cols">
              <h3 className="card_features__title">
                Платье-футболка рыбы в аквариуме
              </h3>
              <div className="card_features__price">899 ₴</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="features__link">
        <a href="#!">
          <img src="public/images/features-button.png" alt="Cмотреть все" />
        </a>
      </div>
    </section>
  );
};
