export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__cols">
          <div className="hero__col">
            <div className="hero__col-top-one">
              <img src="public/images/1.jpg" alt="Футболки" />
            </div>
            <div className="hero__col-bottom">
              <div className="hero__col-left">
                <img src="public/images/2.jpg" alt="Низ" />
              </div>
              <div className="hero__col-right">
                <img src="public/images/3.jpg" alt="верх" />
              </div>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col-top">
              <div className="hero__col-left">
                <img src="public/images/4.jpg" alt="Платья" />
              </div>
              <div className="hero__col-right">
                <img src="public/images/5.jpg" alt="костюмы" />
              </div>
            </div>
            <div className="hero__col-bottom-one">
              <img src="public/images/6.jpg" alt="Худи" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
