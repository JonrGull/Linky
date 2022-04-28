const express = require("express");
const config = require("../knexfile");
const knex = require("knex")(config);
const router = express.Router();
require("dotenv").config({
  path: ".../.env",
});
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  console.log("hello from the interwebs");
  res.status(200).send("What do you want?");
});

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/api", async (req, res) => {
  // const results = await knex.select("*").from("posts");
  console.log("url ", process.env.DATABASE_URL);
  // enable CORS dont remove
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Authorization, Content-Length, X-Requested-With"
  // );

  res.status(200).send(`Log in stuff is ${process.env.DATABASE_URL}`);
});

module.exports = router;
module.exports = knex(knexConfig[process.env.NODE_ENV || "development"]);
