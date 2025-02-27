const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables
const constants = require("../constants");

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Use environment variable for DB name
  process.env.DB_USER,      // Use environment variable for DB user
  process.env.DB_PASSWORD,  // Use environment variable for DB password
  {
    host: process.env.DB_HOST, // Use environment variable for DB host
    dialect: process.env.DB_DIALECT, // 'mysql' dialect
    port: process.env.DB_PORT || 3306, // Default to 3306 if port is not specified
    logging: constants.DB_LOGGING, // Configure logging as per your settings
  }
);

(async () => {
  try {
    await sequelize.authenticate(); // Test database connection
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
