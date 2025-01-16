import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import ProductForm from "../components/ProductForm";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const createdProduct = await response.json();
      setProducts((prev) => [...prev, createdProduct]);
      setShowForm(false); // Hide form after submission
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
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
        Admin Panel
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CardComponent products={products} onDelete={handleDelete} />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          left: "20px",
          backgroundColor: "blue",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => setShowForm(true)}
      >
        Add
      </div>
      {showForm && (
        <ProductForm
          onSubmit={handleAddProduct} // Pass the add product handler
          onCancel={() => setShowForm(false)} // Handle form cancellation
        />
      )}
    </>
  );
};

export default AdminPanel;
