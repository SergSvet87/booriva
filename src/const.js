export const PATHS = {
    main: '/',
    // about: '/about',
    // team: '/team',
    category: (category) => (category ? `&category=${category}` : '&category=:category'),
    subcategory: (category) => (category ? `&subcategory=${category}` : '&subcategory=:category'),
    productName: '/&product=bomb',
    search: (productName) => (productName ? `&product=${productName}` : '&product=:productName'),
  };