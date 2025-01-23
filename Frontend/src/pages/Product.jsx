import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import FooterTop from "../components/FooterTop";

function ProductPage() {
  const location = useLocation(); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get("search") || "";
        const response = await fetch(
          `http://localhost:3000/products?search=${encodeURIComponent(
            searchQuery
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]); 

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
