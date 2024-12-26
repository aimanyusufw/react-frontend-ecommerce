import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import Products from "./Pages/Products";
import DetailProduct from "./Pages/DetailProduct";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/detail",
    element: <DetailProduct />,
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
