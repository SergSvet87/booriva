import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__cols">
          <div className="hero__col">
            <div className="hero__col-top-one">
              <NavLink className="hero__col-link" to={`/&product=bomb`}>
                <img src="/images/1@2x.jpg" alt="Футболки" />
              </NavLink>
            </div>
            <div className="hero__col-bottom">
              <div className="hero__col-left">
                <a className="hero__col-link" href="#!">
                  <img src="/images/2@2x.jpg" alt="Низ" />
                </a>
              </div>
              <div className="hero__col-right">
                <a className="hero__col-link" href="#!">
                  <img src="/images/3@2x.jpg" alt="верх" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col-top">
              <div className="hero__col-left">
                <a className="hero__col-link" href="#!">
                  <img src="/images/4@2x.jpg" alt="Платья" />
                </a>
              </div>
              <div className="hero__col-right">
                <a className="hero__col-link" href="#!">
                  <img src="/images/5@2x.jpg" alt="костюмы" />
                </a>
              </div>
            </div>
            <div className="hero__col-bottom-one">
              <a className="hero__col-link" href="#!">
                <img src="/images/6@2x.jpg" alt="Худи" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
