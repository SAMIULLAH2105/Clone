import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import AdminPanel from "./pages/AdminPanel";

// Create the router with defined routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: "products", // Product route
        element: <Product />,
      },
      {
        path: "product/:slug", // Dynamic product detail route for regular users
        element: <ProductDetail isAdmin={false} />, // Pass isAdmin as false
      },

      {
        path: "contact", // Contact route
        element: <Contact />,
      },
      {
        path: "about", // About route
        element: <About />,
      },
      {
        path: "services", // Services route
        element: <Services />,
      },
      {
        path: "faq", // FAQ route
        element: <FAQ />,
      },
      {
        path: "admin", // Admin panel route
        element: <AdminPanel />,
      },
      {
        path: "admin/:slug", // Admin panel route
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
