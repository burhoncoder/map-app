import { createBrowserRouter } from "react-router-dom";

import { Map, NotFound } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Map />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
