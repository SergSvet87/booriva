export const PATHS = {
    main: '/',
    // about: '/about',
    // team: '/team',
    category: (category) => (category ? `&category=${category}` : '&category=:category'),
    productId: (name = null) => (name ? `/&product=${name}` : '/&product=:name'),
    search: (productName) => (productName ? `&product=${productName}` : '&product=:productName'),
  };