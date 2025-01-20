import { syncTable as syncProductTable } from "./productModel.js";
import { syncTable as syncUserTable } from "./userModel.js";
import { syncTable as syncAdminTable } from "./adminModel.js";

const syncModels = async () => {
  try {
    // Sync all models
    await syncProductTable();
    await syncUserTable();
    await syncAdminTable();
    console.log("All models synced successfully!");
  } catch (error) {
    console.error("Error syncing models:", error);
    throw error;
  }
};

export { syncModels };
