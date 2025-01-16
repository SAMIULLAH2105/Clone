import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import WhatsappButton from "./components/WhatsappButton";
import ThemeProvider from "./themes/Theme";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]); // Initially empty

  // Fetch products from the backend
  const fetchProducts = async (searchTerm = "") => {
    try {
      const response = await fetch(
        `http://localhost:3000/products?search=${searchTerm}`
      );
      const data = await response.json();
      setFilteredProducts(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handles search results
  const handleSearch = (searchTerm) => {
    fetchProducts(searchTerm); // Fetch products based on the search term
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar onSearch={handleSearch} />{" "}
        {/* Pass the search handler to Navbar */}
        <Outlet context={{ filteredProducts, handleSearch }} />{" "}
        {/* Provide context to child routes */}
        <WhatsappButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
