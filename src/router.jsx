import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./const";
import { App } from "./App";

import { ErrorPage } from "./pages/error/ErrorPage";
import { MainPage } from "./pages/MainPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishListPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
	{
		path: PATHS.main,
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: PATHS.cart,
				element: <CartPage />,
			},
			{
				path: PATHS.wishlist,
				element: <WishListPage />,
			},

			// {
			//   path: PATHS.order,
			//   element: <OrderPage />,
			// },

			{
				path: PATHS.category,
				element: <ProductsPage />,
			},

			{
				path: PATHS.subcategory,
				element: <ProductsPage />,
			},

			{
				path: PATHS.productName,
				element: <ProductPage />,
			},

			// {
			//   path: PATHS.search(),
			//   element: <SearchNamePage />,
			// },
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
