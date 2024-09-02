import { useParams } from "react-router-dom";

import { BreadCrumbs } from "../modules/BreadCrumbs";

export const ProductsPage = () => {
  const { category, subcategory } = useParams();

  return (
    <>
      <BreadCrumbs category={category} subCategory={subcategory} />
      <h1>ProductsPage</h1>
    </>
  );
};
