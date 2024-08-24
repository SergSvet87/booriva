export const PATHS = {
  main: "/",
  // about: '/about',
  // team: '/team',
  category: (category) =>
    category ? `&category=${category}` : "&category=:category",
  subcategory: (category, subCategory) =>
    category
      ? `&category=${category}/&subcategory=${subCategory}`
      : "&category=:category/&subcategory=:subCategory",
  productName: "/&product=bomb",
  search: (productName) =>
    productName ? `&product=${productName}` : "&product=:productName",
};
