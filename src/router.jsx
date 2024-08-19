import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./const";
import { App } from "./App";

import { ErrorPage } from "./pages/error/ErrorPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { MainPage } from "./pages/MainPage";

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
      // {
      //   path: PATHS.movieId(),
      //   element: <ProductsPage />,
      // },
      // {
      //   path: PATHS.genre(),
      //   element: <ProductPage />,
      // },
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
