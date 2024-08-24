import { NavLink } from "react-router-dom";

export const Hero = () => {

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__cols">
          <div className="hero__col">
            <div className="hero__col-top-one">
              <NavLink
                className="hero__col-link"
                to={`products&category=top&subcategory=t-shirts`}
              >
                <img src="/images/1@2x.jpg" alt="Футболки" />
              </NavLink>
            </div>
            <div className="hero__col-bottom">
              <div className="hero__col-left">
                <NavLink
                  className="hero__col-link"
                  to={`products&category=bottom`}
                >
                  <img src="/images/2@2x.jpg" alt="Низ" />
                </NavLink>
              </div>
              <div className="hero__col-right">
                <NavLink
                  className="hero__col-link"
                  to={`products&category=top`}
                >
                  <img src="/images/3@2x.jpg" alt="верх" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col-top">
              <div className="hero__col-left">
                <NavLink
                  className="hero__col-link"
                  to={`products&category=dresses`}
                >
                  <img src="/images/4@2x.jpg" alt="Платья" />
                </NavLink>
              </div>
              <div className="hero__col-right">
                <NavLink
                  className="hero__col-link"
                  to={`products&category=costumes`}
                >
                  <img src="/images/5@2x.jpg" alt="костюмы" />
                </NavLink>
              </div>
            </div>
            <div className="hero__col-bottom-one">
              <NavLink
                className="hero__col-link"
                to={`products&category=top&subcategory=hoodie`}
              >
                <img src="/images/6@2x.jpg" alt="Худи" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
