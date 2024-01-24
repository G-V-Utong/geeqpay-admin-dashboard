import Home from "./home/Home";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./users/Users";
import Products from "./products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";
import { useState } from "react";

function App() {
  // const [ showNav, setShowNav ] = useState(false)

  const Layout = () => {
    return (
     <div className="layout">
       <div className="main">
        <div className="">
          <Menu/>
        </div>
        <div className="container">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        
      </div>
      <Footer />
     </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
