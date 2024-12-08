import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
