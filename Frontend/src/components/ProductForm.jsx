import { useState } from "react";

const ProductForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    image1: "",
    image2: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to the parent component
    setFormData({ name: "", image1: "", image2: "", description: "" }); // Reset form
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure the modal is on top
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "400px", // Adjust width as needed
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "100%", // Make input fields full width
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            name="image1"
            placeholder="Image 1 URL"
            value={formData.image1}
            onChange={handleInputChange}
            required
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "100%", // Make input fields full width
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            name="image2"
            placeholder="Image 2 URL"
            value={formData.image2}
            onChange={handleInputChange}
            required
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "100%", // Make input fields full width
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "100%", // Make textarea full width
              borderRadius: "4px",
              border: "1px solid #ccc",
              resize: "vertical", // Allow vertical resizing
            }}
          ></textarea>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
