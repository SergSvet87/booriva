import { useLocation } from "react-router-dom";

import { BreadCrumbs } from "../modules/BreadCrumbs";
import { Card } from "../modules/product-page/Card";
import { Instagram } from "../modules/Instagram";
import { Services } from "../modules/Services";

const data = [
  {
    id: 1,
    title: "Бомбер Gone Crazy хаки",
    images: {
      small: [
        "/images/product-slide-1.png",
        "/images/product-slide-2.png",
        "/images/product-slide-3.png",
        "/images/product-slide-4.png",
        "/images/product-slide-1.png",
        "/images/product-slide-3.png",
      ],

      big: [
        "/images/product-slide-1.png",
        "/images/product-slide-2.png",
        "/images/new-3.jpg",
        "/images/product-slide-4.png",
        "/images/product-slide-1.png",
        "/images/new-3.jpg",
      ],
    },
    price: 2499,
    additional: ["50% вискоза", "50% полиэстер"],
    sizes: ["XS - s", "s - m", "m - l", "l - xl"],
    description:
      "Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается. Один",
  },
];

export const ProductPage = () => {
  const location = useLocation();

  const currentCategory = new URLSearchParams(location.pathname).get(
    "category"
  );
  const currentSubCategory = new URLSearchParams(location.pathname).get(
    "subcategory"
  );
  const currentProductName = new URLSearchParams(location.pathname).get(
    "productname"
  );

  return (
    <>
      <BreadCrumbs category={currentCategory} subCategory={currentSubCategory} product={currentProductName} />

      <Card data={data[0]} />

      <Services />

      <Instagram />
    </>
  );
};
