import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";

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
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
