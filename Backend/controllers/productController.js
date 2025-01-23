import { Product } from "../models/productModel.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    const { search } = req.query;
    let whereClause = {};

    if (search) {
      whereClause = {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } },
        ],
      };
    }

    const products = await Product.findAll({
      where: whereClause,
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

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

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, image1, image2, description, isFavourite } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    if (name !== undefined) product.name = name;
    if (slug !== undefined) product.slug = slug;
    if (image1 !== undefined) product.image1 = image1;
    if (image2 !== undefined) product.image2 = image2;
    if (description !== undefined) product.description = description;
    if (isFavourite !== undefined) product.isFavourite = isFavourite;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export const wishListProducts = async (req, res) => {

  
  try {
    const favouriteProducts = await Product.findAll({
      where: {
        isFavourite: true, 
      },
    });

    res.status(200).json(favouriteProducts);
  } catch (error) {
    console.error("Error fetching favourite products:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
