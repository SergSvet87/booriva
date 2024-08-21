// import React from 'react'

import { BreadCrumbs } from "../modules/BreadCrumbs";
import { Card } from "../modules/product-page/Card";
import { Instagram } from "../modules/Instagram";
import { Services } from "../modules/Services";

const data = [
  {
    id: 1,
    title: "Бомбер Gone Crazy хаки",
    images: [
      "/public/images/product-slide-1.png",
      "/public/images/product-slide-2.png",
      "/public/images/product-slide-3.png",
      "/public/images/product-slide-4.png",
      "/public/images/product-slide-1.png",
      "/public/images/product-slide-3.png",
    ],
    price: 2499,
    additional: ["50% вискоза", "50% полиэстер"],
    sizes: ["XS - s", "s - m", "m - l", "l - xl"],
    description:
      "Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается. Один",
  },
];

export const ProductPage = () => {
  return (
    <>
      <BreadCrumbs />

      <Card data={data[0]} />

      <Services />

      <Instagram />
    </>
  );
};
