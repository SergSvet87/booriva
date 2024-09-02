import React, { useState } from 'react';
import { BreadCrumbs } from "../BreadCrumbs";


const Filter = () => {
  const [selectedPrice, setSelectedPrice] = useState('under-500');
  const [selectedSize, setSelectedSize] = useState('s-m');

  const toggleSubcategory = (e) => {
    const subcategory = e.currentTarget.nextSibling;
    if (subcategory && subcategory.style.display === 'block') {
      subcategory.style.display = 'none';
    } else if (subcategory) {
      subcategory.style.display = 'block';
    }
  };

  return (
<>
    <BreadCrumbs />

    <div className="filter">
      <div className="filter-category">
        <h3>Категории:</h3>
        <ul>
          <li>Платья</li>
          <li>Верх
            <ul>
              <li onClick={toggleSubcategory}>Куртки
                <ul>
                  <li>Все товары</li>
                  <li>Бомберы</li>
                  <li>Джинсовки</li>
                  <li>Дождевики</li>
                  <li>Куртки</li>
                  <li>Пальто</li>
                  <li>Пуховики</li>
                  <li>Тренчи</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Низ</li>
          <li>Мелочи</li>
          <li>Костюмы</li>
        </ul>
      </div>
      <div className="filter-price">
        <h3>Цены:</h3>
        <ul>
          <li>
            <input type="radio" name="price" id="all-prices" onChange={() => setSelectedPrice('all')} />
            <label htmlFor="all-prices">Все цены</label>
          </li>
          <li>
            <input type="radio" name="price" id="under-500" checked={selectedPrice === 'under-500'} onChange={() => setSelectedPrice('under-500')} />
            <label htmlFor="under-500">до 500</label>
          </li>
          <li>
            <input type="radio" name="price" id="500-1000" checked={selectedPrice === '500-1000'} onChange={() => setSelectedPrice('500-1000')} />
            <label htmlFor="500-1000">500 — 1000</label>
          </li>
          <li>
            <input type="radio" name="price" id="1000-1500" checked={selectedPrice === '1000-1500'} onChange={() => setSelectedPrice('1000-1500')} />
            <label htmlFor="1000-1500">1000 — 1500</label>
          </li>
          <li>
            <input type="radio" name="price" id="over-1500" checked={selectedPrice === 'over-1500'} onChange={() => setSelectedPrice('over-1500')} />
            <label htmlFor="over-1500">от 1500</label>
          </li>
        </ul>
      </div>
      <div className="filter-size">
        <h3>Размер:</h3>
        <ul>
          <li>
            <input type="radio" name="size" id="xs-s" onChange={() => setSelectedSize('xs-s')} />
            <label htmlFor="xs-s">XS — S</label>
          </li>
          <li>
            <input type="radio" name="size" id="s-m" checked={selectedSize === 's-m'} onChange={() => setSelectedSize('s-m')} />
            <label htmlFor="s-m">S — M</label>
          </li>
          <li>
            <input type="radio" name="size" id="m-l" checked={selectedSize === 'm-l'} onChange={() => setSelectedSize('m-l')} />
            <label htmlFor="m-l">M — L</label>
          </li>
          <li>
            <input type="radio" name="size" id="l-xl" checked={selectedSize === 'l-xl'} onChange={() => setSelectedSize('l-xl')} />
            <label htmlFor="l-xl">L — XL</label>
          </li>
        </ul>
      </div>
      </div>
      </>
  );
};

export default Filter;
