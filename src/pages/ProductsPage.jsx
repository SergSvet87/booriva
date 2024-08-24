import { useLocation } from "react-router-dom";

import { BreadCrumbs } from "../modules/BreadCrumbs";
// import { Instagram } from "../modules/Instagram";
// import { Services } from "../modules/Services";

export const ProductsPage = () => {
  const location = useLocation();

  const currentCategory = new URLSearchParams(location.pathname).get(
    "category"
  );
  const currentSubCategory = new URLSearchParams(location.pathname).get(
    "subcategory"
  );

  return (
    <>
      <BreadCrumbs category={currentCategory} subCategory={currentSubCategory} />

      ProductsPage

      {/* <Services />

      <Instagram /> */}
    </>
  );
};
