import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { products } from './components/ProductData'; // Import the product data
import WhatsappButton from './components/WhatsappButton';


function App() {
  const [filteredProducts, setFilteredProducts] = useState(products); // Initially, all products

  // Handles search results
  const handleSearch = (searchResults) => {
    setFilteredProducts(searchResults); // Update the state with the filtered products
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} /> {/* Pass the search handler to Navbar */}
      <Outlet context={{ filteredProducts, handleSearch }} /> {/* Provide context to child routes */}
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default App;
