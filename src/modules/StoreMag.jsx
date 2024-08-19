export const StoreMag = () => {
  return (
    <section className="store">
      <div className="container">
        <div className="store__wrapper">
          <div className="store__col">
            <div className="store__col-addreess">
              <p>г.Киев, ул. Нижний вал, 37</p>
              <p>Ежедневно с 11:00 до 21:00</p>
            </div>
          </div>
          <div className="store__col-image">
            <img src="public/images/store.jpg" alt="Store Image" />
          </div>
          <div className="store__col-text">
            <p>
              Ты можешь заказать примерку понравившейся вещи или просто
              заглянуть, гуляя по Подолу, и примерять что-то из в наличии
            </p>
            <div className="store__col-map">
              <img src="public/images/map-image.jpg" alt="Map Image" />
            </div>
          </div>
        </div>
        <div className="store__link">
          <a href="#!">
            <img src="public/images/store-button.png" alt="Cмотреть все" />
          </a>
        </div>
      </div>
    </section>
  );
};
