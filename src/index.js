// index.js
import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";
import { AppVersion } from "./models/AppVersion.js"; // Importar el nuevo modelo

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
