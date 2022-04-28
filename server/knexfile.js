require("dotenv").config({
  path: "./.env.local",
});
//production env add
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// module.exports = {
//   development: {
//     client: "pg",
//     connection: process.env.DB_URL || {
//       host: process.env.DB_HOST || "127.0.0.1",
//       port: process.env.DB_PORT || 5432,
//       database: process.env.DB_NAME,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//     },
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds",
//     },
//   },

//   production: {
//     client: process.env.DB_CLIENT || "pg",
//     connection: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds",
//     },
//   },
// };



module.exports = {
  client: "postgresql",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};