import { DataTypes } from 'sequelize';
import { sequelize } from "../lib/connectDB.js"; // Import the sequelize instance

// Define the Admin model
const Admin = sequelize.define("Admin", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensures the email is in a valid format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Sync the model with the database (create the table)
const syncTable = async () => {
  try {
    await Admin.sync(); // Creates the table if it doesn't exist
    console.log('Admin table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

export { Admin, syncTable };
