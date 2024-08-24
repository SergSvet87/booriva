import { NavLink } from "react-router-dom";

import { categories } from "../utils/categories";
import { PATHS } from "../const";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__top">
          <div className="header__info-left">
            <ul className="header__info-list-items header__info-list-items-left">
              <li className="header__info-list-item header__info-list-item-location">
                <img
                  className="header__info-image"
                  src="/images/location-icon.svg"
                  alt="location-icon"
                ></img>
                <p>Киев, Нижний вал, 37</p>
              </li>
              <li className="header__info-list-item">
                <img
                  className="header__info-image"
                  src="/images/phone-icon.svg"
                  alt="phone-icon"
                ></img>
                <p>+38 063 843 34 71</p>
              </li>
            </ul>
          </div>
          <div className="header__logo">
            <a className="header__logo-link" href="/">
              <img
                className="header__logo-image"
                src="/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>

          <div className="header__info-right">
            <ul className="header__info-list-items header__info-list-items-right">
              <li className="header__info-list-item header__info-list-item-search">
                <a href="#!">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C15.968 20 20 15.968 20 11ZM18 11C18 14.867 14.867 18 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11ZM18.6618 18.8937C18.3395 19.214 18.3379 19.735 18.6583 20.0574L20.315 21.7239C20.6353 22.0462 21.1563 22.0478 21.4786 21.7274L21.7289 21.4787C22.0512 21.1583 22.0527 20.6373 21.7323 20.315L20.0757 18.6484C19.7553 18.3261 19.2343 18.3246 18.912 18.6449L18.6618 18.8937Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </a>
                <p>Поиск</p>
              </li>
              <li className="header__info-list-item header__info-list-item-favorite">
                <a href="#!">
                  <svg
                    className="header__info-svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99976 3C4.23876 3 1.99976 5.216 1.99976 7.95C1.99976 10.157 2.87476 15.395 11.4878 20.69C11.642 20.7839 11.8192 20.8335 11.9998 20.8335C12.1804 20.8335 12.3575 20.7839 12.5118 20.69C21.1248 15.395 21.9998 10.157 21.9998 7.95C21.9998 5.216 19.7608 3 16.9998 3C14.2388 3 11.9998 6 11.9998 6C11.9998 6 9.76076 3 6.99976 3Z"
                      stroke="#1F1F1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="header__info-list-item header__info-list-item-bag">
                <a href="#!">
                  <svg
                    className="header__info-svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.05065 8.92C4.07076 8.6694 4.18452 8.43557 4.36928 8.26508C4.55404 8.09459 4.79624 7.99995 5.04765 8H18.9516C19.2031 7.99995 19.4453 8.09459 19.63 8.26508C19.8148 8.43557 19.9285 8.6694 19.9486 8.92L20.8256 19.84C20.8477 20.1152 20.8126 20.392 20.7225 20.6529C20.6323 20.9139 20.4892 21.1533 20.302 21.3562C20.1147 21.5592 19.8875 21.7211 19.6347 21.8319C19.3818 21.9427 19.1087 21.9999 18.8326 22H5.16665C4.89057 21.9999 4.6175 21.9427 4.36463 21.8319C4.11175 21.7211 3.88456 21.5592 3.69734 21.3562C3.51013 21.1533 3.36695 20.9139 3.27682 20.6529C3.18669 20.392 3.15156 20.1152 3.17365 19.84L4.04965 8.92H4.05065Z"
                      stroke="#1F1F1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9998 11V6C15.9998 4.93913 15.5783 3.92172 14.8282 3.17157C14.078 2.42143 13.0606 2 11.9998 2C10.9389 2 9.92147 2.42143 9.17133 3.17157C8.42118 3.92172 7.99976 4.93913 7.99976 6V11"
                      stroke="#1F1F1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header__bottom">
          <nav className="header__menu">
            <ul className="header__menu-list-items">
              {categories.map((category) => (
                <li className="header__menu-list-item" key={category.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__menu-link header__menu-link_active"
                        : "header__menu-link"
                    }
                    to={PATHS.category(category.name)}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
