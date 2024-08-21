import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./const";
import { App } from "./App";

import { ErrorPage } from "./pages/error/ErrorPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { MainPage } from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";

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
      // {
      //   path: PATHS.about,
      //   element: <AboutPage />,
      // },
      // {
      //   path: PATHS.team,
      //   element: <TeamPage />,
      // },
      {
        path: PATHS.productName,
        element: <ProductPage />,
      },
      {
        path: PATHS.category(),
        element: <ProductsPage />,
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
