export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__cols">
          <div className="hero__col">
            <div className="hero__col-top-one">
              <a className="hero__col-link" href="#!">
                <img src="public/images/1@2x.jpg" alt="Футболки" />
              </a>
            </div>
            <div className="hero__col-bottom">
              <div className="hero__col-left">
                <a className="hero__col-link" href="#!">
                  <img src="public/images/2@2x.jpg" alt="Низ" />
                </a>
              </div>
              <div className="hero__col-right">
                <a className="hero__col-link" href="#!">
                  <img src="public/images/3@2x.jpg" alt="верх" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col-top">
              <div className="hero__col-left">
                <a className="hero__col-link" href="#!">
                  <img src="public/images/4@2x.jpg" alt="Платья" />
                </a>
              </div>
              <div className="hero__col-right">
                <a className="hero__col-link" href="#!">
                  <img src="public/images/5@2x.jpg" alt="костюмы" />
                </a>
              </div>
            </div>
            <div className="hero__col-bottom-one">
              <a className="hero__col-link" href="#!">
                <img src="public/images/6@2x.jpg" alt="Худи" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
