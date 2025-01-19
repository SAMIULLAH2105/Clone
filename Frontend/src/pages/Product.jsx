import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import FooterTop from "../components/FooterTop";

function ProductPage() {
  const location = useLocation(); // Access the current URL
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Extract the search query from the URL
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get("search") || "";

        // Fetch products from the backend based on the search query
        const response = await fetch(
          `http://localhost:3000/products?search=${encodeURIComponent(
            searchQuery
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data); // Update the products state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchProducts();
  }, [location.search]); // Re-run the effect when the search query changes

  return (
    <>
      <div className="product" style={{ textAlign: "center" }}>
        <h1
          style={{
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "0",
            marginTop: "85px",
            backgroundColor: "#e7eaec",
          }}
        >
          Products
        </h1>
      </div>
      {loading ? ( // Show a loading indicator while fetching data
        <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
      ) : (
        <CardComponent products={products} /> // Display the products in CardComponent
      )}
      <FooterTop />
    </>
  );
}

export default ProductPage;
