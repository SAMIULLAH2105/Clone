import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import AdminPanel from "./pages/AdminPanel"

// Protected Route component to handle auth
const ProtectedRoute = ({ children }) => {
  // Replace this with your actual auth check
  // const isAuthenticated = localStorage.getItem('isAdmin') === 'true';
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Regular user routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "products/:slug",
        element: <ProductDetail isAdmin={false} />,
      },

      // Admin routes
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/services",
        element: (
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/faq",
        element: (
          <ProtectedRoute>
            <FAQ />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/products",
        element: (
          <ProtectedRoute>
            <AdminPanel/>
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/products/:slug",
        element: (
          <ProtectedRoute>
            <ProductDetail isAdmin={true} />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);