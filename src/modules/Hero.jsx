export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__cols">
          <div className="hero__col">
            <div className="hero__col-top-one">
              <img src="public/images/1@2x.jpg" alt="Футболки" />
            </div>
            <div className="hero__col-bottom">
              <div className="hero__col-left">
                <img src="public/images/2@2x.jpg" alt="Низ" />
              </div>
              <div className="hero__col-right">
                <img src="public/images/3@2x.jpg" alt="верх" />
              </div>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col-top">
              <div className="hero__col-left">
                <img src="public/images/4@2x.jpg" alt="Платья" />
              </div>
              <div className="hero__col-right">
                <img src="public/images/5@2x.jpg" alt="костюмы" />
              </div>
            </div>
            <div className="hero__col-bottom-one">
              <img src="public/images/6@2x.jpg" alt="Худи" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
