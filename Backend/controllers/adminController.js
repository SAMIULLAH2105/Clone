import { Admin } from "../models/adminModel.js"; // Import the Admin model

// Controller to handle admin login
export const loginAdmin = async (req, res) => {
  console.log("hello");

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check if the password is correct (assuming you are storing plain text passwords)
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If login is successful, send a success response (you can also add a JWT token here for authentication)
    return res
      .status(200)
      .json({ message: "Login successful", adminId: admin.id });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
