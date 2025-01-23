import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connectDB.js";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    isFavourite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

const syncTable = async () => {
  try {
    await Product.sync({alter: true});
    console.log("Product table created successfully!");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

export { Product, syncTable };
