import { useState } from "react";
import { GetDirectionsModal } from "./GetDirectionsModal";

export const Store = () => {
  const [modalGetDirectionsIsOpen, setModalGetDirectionsIsOpen] = useState(false);

  const openModal = () => {
    setModalGetDirectionsIsOpen(true);
  };

  const closeModal = () => {
    setModalGetDirectionsIsOpen(false);
  };

  return (
    <section className="store">
      <div className="container store__container">
        <h2 className="store__title">BOORIVA STORE</h2>

        <div className="store__content">
          <div className="store__decor_top"></div>

          <div className="store__address">
            <p>г.Киев, ул. Нижний вал, 37</p>

            <p>Ежедневно с 11:00 до 21:00</p>
          </div>

          <img
            className="store__img"
            src="/images/store.jpg"
            alt="BOORIVA STORE"
          />

          <p className="store__text">
            Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
            гуляя по Подолу, и примерять что-то из в наличии
          </p>

          <div className="store__decor_bot"></div>

          <div className="store__map"></div>
        </div>

        <div className="store__btn">
          <button type="button" onClick={openModal}>
            проложить маршрут
          </button>
        </div>
      </div>

      <GetDirectionsModal
        isOpen={modalGetDirectionsIsOpen}
        onRequestClose={closeModal}
      />
    </section>
  );
};
