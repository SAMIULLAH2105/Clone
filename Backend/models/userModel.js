import { DataTypes } from 'sequelize';
import { sequelize } from "../lib/connectDB.js"; // Import the sequelize instance

// Define the Contact model
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensures the email is in a valid format
    },
  },
  whatsappNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Sync the model with the database (create the table)
const syncTable = async () => {
  try {
    await User.sync(); // Creates the table if it doesn't exist
    console.log('User table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

export { User, syncTable };
