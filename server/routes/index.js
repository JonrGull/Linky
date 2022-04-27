const express = require("express");
//require knex, config it
const config = require("../knexfile");
const knex = require("knex");
// const path = require("path");
const router = express.Router();
require("dotenv").config({
  path: ".env.local",
});
router.use(express.urlencoded({ extended: true }));

router.get("/api", (req, res) => {
  res.json({ message: "hello! from router server!" });
});

module.exports = knex(config[process.env.NODE_ENV || "development"]);
