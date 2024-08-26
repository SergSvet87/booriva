export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__wrap">
          <div className="services__col">
            <img src="/images/sending-icon.svg" />
            <div className="services__col-body">
              <h3 className="services__col-title">Отправка день в день</h3>
              <p className="services__col-text">
                При заказе до 18<sup>00</sup>
              </p>
            </div>
          </div>
          <div className="services__col">
            <img src="/images/exchange-icon.svg" />
            <div className="services__col-body">
              <h3 className="services__col-title">Легкий возврат/обмен</h3>
              <p className="services__col-text">В течении 14 дней</p>
            </div>
          </div>
          <div className="services__col">
            <img src="/images/made-in-icon.svg" />
            <div className="services__col-body">
              <h3 className="services__col-title">Сделано в Украине</h3>
              <p className="services__col-text">Прям в Киеве</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
