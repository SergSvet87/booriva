export const PATHS = {
  main: "/",
  // about: '/about',
  // team: '/team',
  category: (category) =>
    category
      ? `products&category=${category}`
      : "products&category=:category",
  subcategory: (category, subCategory) =>
    category && subCategory
      ? `products&category=${category}&subcategory=${subCategory}`
      : "products&category=:category&subcategory=:subCategory",
  productName: "products&productname=bomb",
  store: "products&category=top&subcategory=t-shirts",
  productname: (category, subCategory, product) =>
    category && subCategory && product
      ? `products&category=${category}&subcategory=${subCategory}&productname=${product}`
      : "products&category=:category&subcategory=:subCategory&productname=:product",
  search: (productName) =>
    productName
      ? `products&product=${productName}`
      : "products&product=:productName",
};
