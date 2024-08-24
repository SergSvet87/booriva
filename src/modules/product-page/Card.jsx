/* eslint-disable react/prop-types */
import { useState } from "react";

import { ProductSlider } from "./ProductSlider";
import { ProductModal } from "./ProductModal";

export const Card = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addToCart, setAddToCart] = useState([]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="card">
      <div className="card__container">
        <article className="card__wrapper">
          <div className="card__image">
            <ProductSlider images={data.images} />

            <div className="card__fav-btn">
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
          </div>

          <div className="card__content">
            <h2 className="card__title">{data.title}</h2>

            <p className="card__price">{data.price}&nbsp;₴</p>
            <div className="card__sizes">
              <h3 className="card__sizes-title">Выбрать размер:</h3>

              <ul className="card__sizes-list">
                {data.sizes?.map((item, index) => (
                  <li className="card__sizes-item" key={index}>
                    <label className="card__sizes-btn">
                      <input
                        type="radio"
                        name="size"
                        value={item}
                        // checked={index === 1}
                      />
                      <span className="card__sizes-label">{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card__buttons">
              <button
                className="card__buttons-btn card__buttons-btn_cart"
                onClick={() => setAddToCart(data)}
              >
                в корзину
              </button>
              <button
                className="card__buttons-btn card__buttons-btn_order"
                onClick={() => setModalIsOpen(true)}
              >
                Быстрый заказ
              </button>
            </div>

            <div className="card__description">
              {data.description}
              <button className="card__description-btn">Читать больше</button>
            </div>

            <div className="card__params">
              <div className="card__params-col">
                <h4 className="card__params-title">Параметры модели:</h4>
                <p className="card__params-text">(На модели XS — S-ка)</p>
                <img
                  className="card__params-img"
                  src="/images/model.svg"
                  alt="Параметры модели с объемами"
                />
              </div>

              <div className="card__params-col">
                <h4 className="card__params-title">Состав:</h4>

                <ul className="card__params-list">
                  {data.additional?.map((item, index) => (
                    <li className="card__params-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card__button">
              <button className="card__button-btn">таблица размеров</button>
            </div>
          </div>
        </article>

        <ProductModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          data={data}
        />
      </div>
    </section>
  );
};
