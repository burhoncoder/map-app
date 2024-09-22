import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { routes } from "./routes.tsx";

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} pauseOnHover={true} theme="colored" />
      <RouterProvider router={routes} />
    </>
  );
};
