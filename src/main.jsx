import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Cart from "./Sections/Cart.jsx";
import Products from "./Sections/Products.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
  { path: "/products", element: <Products />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
