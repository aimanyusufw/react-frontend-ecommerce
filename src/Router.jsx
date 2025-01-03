import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("./Pages/Home"));
const Signup = loadable(() => import("./Pages/Auth/Signup"));
const Signin = loadable(() => import("./Pages/Auth/Signin"));
const Products = loadable(() => import("./Pages/Products"));
const DetailProduct = loadable(() => import("./Pages/DetailProduct"));
const Cart = loadable(() => import("./Pages/Cart"));

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
    path: "/cart",
    element: <Cart />,
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
