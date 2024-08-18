import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__top">
          <div className="header__info"></div>
          <div className="header__logo">
            <a className="header__logo-link" href="/">
              <img className="header__logo" src="/images/logo.svg" alt="logo" />
            </a>
          </div>
        </div>

        <div className="header__bottom">
          <nav className="header__menu">
            <ul>
              <li>
                <img src="public/images/search-icon.svg" alt="search-icon" />
              </li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
