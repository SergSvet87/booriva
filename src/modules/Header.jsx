export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__top">
          <div className="header__info-left"></div>
          <div className="header__logo">
            <a className="header__logo-link" href="/">
              <img
                className="header__logo"
                src="public/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>

          <div className="header-infi-right">
            <ul>
              <li>
                <img src="public/images/search-icon.svg" alt="search-icon" />
              </li>
              <li>
                <img
                  src="public/images/favorite-icon.svg"
                  alt="favorite-icon"
                />
              </li>
              <li>
                <img src="public/images/bag-icon.svg" alt="favorite-icon" />
              </li>
            </ul>
          </div>
        </div>

        <div className="header__bottom">
          <nav className="header__menu">
            <ul className="header__menu-list-items">
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">Новинки</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">Платья</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">Верх</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">НИз</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">куртки</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">Мелочи</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">Костюмы</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-link" href="#!">#Boorivagirls</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
