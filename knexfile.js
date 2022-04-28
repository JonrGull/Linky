require("dotenv").config({
  path: "./.env.local",
});
//production env add
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// module.exports = {
//   production: {
//   client: "pg",
//   connection: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: {
//     directory: "./data/seeds",
//   },
// },

// development: {
//   client: "pg",
//   connection: {
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   },
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: { directory: "./data/seeds" },
// },

module.exports = {
  // client: "pg",
  // connection: process.env.DB_URL || {
  //   host: process.env.DB_HOST || "127.0.0.1",
  //   port: process.env.DB_PORT || 9000,
  //   database: process.env.DB_NAME,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  // },
  // migrations: {
  //   directory: "./db/migrations",
  // },
  // seeds: {
  //   directory: "./db/seeds",
  // },
  client: "pg",
  connection: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
  migrations: {
    directory: "./server/db/migrations",
  },
  seeds: {
    directory: "./server/db/seeds",
  },
};
