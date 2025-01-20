import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import AdminPanel from "./pages/AdminPanel";
import LoginForm from "./components/LoginForm";

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        // Regular user routes
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
        { path: "faq", element: <FAQ /> },
        { path: "products", element: <Product /> },
        { path: "products/:slug", element: <ProductDetail isAdmin={false} /> },

        // Admin login route
        {
          path: "admin/login",
          element: <LoginForm setIsAuthenticated={setIsAuthenticated} />,
        },

        // Admin routes with authentication check
        {
          path: "admin",
          element: isAuthenticated ? (
            <Home /> // Show Home component after authentication
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/products",
          element: isAuthenticated ? (
            <AdminPanel />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/products/:slug",
          element: isAuthenticated ? (
            <ProductDetail isAdmin={true} />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/services",
          element: isAuthenticated ? (
            <Services />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/about",
          element: isAuthenticated ? (
            <About />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/contact",
          element: isAuthenticated ? (
            <Contact />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
        {
          path: "admin/faq",
          element: isAuthenticated ? (
            <FAQ />
          ) : (
            <Navigate to="/admin/login" replace />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
