// import React from 'react'

import { BreadCrumbs } from "../modules/BreadCrumbs";
import { Card } from "../modules/product-page/Card";
import { Instagram } from "../modules/Instagram";
import { Services } from "../modules/Services";

export const ProductsPage = () => {
  return (
    <>
      <BreadCrumbs />

      <Card />

      <Services />

      <Instagram />
    </>
  );
};
