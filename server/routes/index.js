const express = require("express");
const config = require("../knexfile");
const knex = require("knex")(config);
const router = express.Router();
require("dotenv").config({
  path: ".env.local",
});
router.use(express.urlencoded({ extended: true }));

// router.get("/"),
//   (req, res) => {
//     console.log("hello from the interwebs");
//     res.status(200).send("What do you want?");
//   };

router.get("/api", async (req, res) => {
  const results = await knex.select("*").from("posts");

  // enable CORS dont remove
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  res.json(results);
});

module.exports = router;
