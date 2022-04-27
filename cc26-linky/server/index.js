const express = require("express");
//require knex, config it
const router = express.Router();
require("dotenv").config({
  path: ".env.local",
});

router.get("/api", (req, res) => {
  res.json({ message: "hello! from router server!" });
});

module.exports = router;
