import { Product } from "../models/productModel.js";
import { Op } from "sequelize";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const { search } = req.query; // Extract search query from the request
    let whereClause = {};

    if (search) {
      whereClause = {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } }, // Case-insensitive search on name
          { description: { [Op.like]: `%${search}%` } }, // Case-insensitive search on description
        ],
      };
    }

    const products = await Product.findAll({
      where: whereClause,
    }); // Fetch products based on the queryF
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }


};

// Get a single product by slug
export const getProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({
      where: { slug },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, slug, image1, image2, description } = req.body;

    const newProduct = await Product.create({
      name,
      slug,
      image1,
      image2,
      description,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {     
  try {
    const { id } = req.params;
    const deletedProduct = await Product.destroy({
      where: { id },
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
