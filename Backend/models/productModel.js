import { DataTypes } from 'sequelize';
import { sequelize } from "../lib/connectDB.js"; // Import the sequelize instance

// Define the Product model
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure slugs are unique
  },
  image1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Sync the model with the database (create the table)
const syncTable = async () => {
  try {
    await Product.sync(); // Creates the table if it doesn't exist
    console.log('Product table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

export { Product, syncTable };
