import { syncTable as syncProductTable } from "./productModel.js";
import { syncTable as syncUserTable } from "./userModel.js";

const syncModels = async () => {
  try {
    // Sync all models
    await syncProductTable();
    await syncUserTable();
    console.log("All models synced successfully!");
  } catch (error) {
    console.error("Error syncing models:", error);
    throw error;
  }
};

export { syncModels };
