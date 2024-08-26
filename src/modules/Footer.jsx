import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <img src="/images/footer-logo.svg" alt="Logo Icon Booriva" />
        </div>

        <div className="footer__info">
          <h3 className="footer__title footer__info-title">Инфо</h3>

          <ul className="footer__info-list">
            <li className="footer__info-item">
              <Link to="#" className="footer__info-link">
                Контакты
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="#" className="footer__info-link">
                Система лояльности
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="#" className="footer__info-link">
                Обмен и возврат
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="#" className="footer__info-link">
                Доставка и оплата
              </Link>
            </li>
          </ul>

          <ul className="footer__info-socials">
            <li className="footer__info-socials-item">
              <Link to="#" className="footer__info-socials-link">
                <img src="/images/instagram-icon.svg" alt="Instagram Icon" />
              </Link>
            </li>
            <li className="footer__info-socials-item">
              <Link to="#" className="footer__info-socials-link">
                <img src="/images/facebook-icon.svg" alt="Facebook Icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__address">
          <h3 className="footer__title footer__address-title">НАШ АДРЕС</h3>

          <ul className="footer__address-list">
            <li className="footer__address-item">
              <address>г.Киев, ул. Нижний Вал, 37</address>
            </li>
            <li className="footer__address-item footer__address-item_days">Пн — Вс: с 11:00 до 21:00</li>
            <li className="footer__address-item footer__address-item_time">Ежедневно: 
            с 11:00 до 21:00</li>

            <li className="footer__address-item  footer__address-item_tel">
                <Link to="tel:+380638433471">+38 063 843 34 71</Link>
            </li>
          </ul>
        </div>

        <div className="footer__socials">
          <h3 className="footer__title footer__socials-title">СОЦ.СЕТИ</h3>

          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <Link to="#" className="footer__socials-link">
                <img src="/images/instagram-icon.svg" alt="Instagram Icon" />
              </Link>
            </li>
            <li className="footer__socials-item">
              <Link to="#" className="footer__socials-link">
                <img src="/images/facebook-icon.svg" alt="Facebook Icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__feedback">
          <img className="footer__feedback-img" src="/images/Ivanka.png" alt="Photo Ivanka" />

          <div className="footer__feedback-content">
            <p className="footer__feedback-text">
              Нам важно знать, что ты думаешь про нас! Просто напиши мне!
            </p>
            <Link to="#" className="footer__title footer__feedback-link">
              Написать Иванке
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
