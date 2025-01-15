// models/index.js
import { syncTable as syncProductTable } from "./productModel.js";
// Import other models here (if any) in the future

// Sync all models (you can add more models as your project grows)
const syncModels = async () => {
  try {
    // Sync all models (you can add more models here)
    await syncProductTable(); // Sync Product model
    console.log("All models synced successfully!");
  } catch (error) {
    console.error("Error syncing models:", error);
    throw error;
  }
};

export { syncModels };
