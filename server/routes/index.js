const express = require("express");
//require knex, config it
const config = require("../knexfile");
const knex = require("knex")(config);
const router = express.Router();
require("dotenv").config({
  path: ".env.local",
});
router.use(express.urlencoded({ extended: true }));

router.get("/api", async (req, res) => {
  const results = await knex.select("*").from("posts");

  // enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  res.json(results);
});

module.exports = router;
