import Home from "./home/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./users/Users";
import Products from "./products/Products";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "users",
      element: (
        <Users/>
    )
    },
    {
      path: "products",
      element: (
        <Products/>
    )
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
