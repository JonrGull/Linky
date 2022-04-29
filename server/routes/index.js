const express = require("express");
const config = require("../../knexfile");
const knex = require("knex")(config);
const router = express.Router();
const cors = require("cors");
router.use(cors());

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
  const results = await knex.select("*").from("posts");
  console.log("url ", process.env.DATABASE_URL);
  console.log(results);
  res.status(200).send(JSON.stringify(results));
});

//Post request
router.post("/newpost", async (req, res) => {
  await knex("posts").insert({
    link: req.body.link,
    description: req.body.description,
    tags: { tags: req.body.tags.split(",") },
  });
  console.log("posting");
  console.log(req.body);
});
module.exports = router;
// module.exports = knex(knexConfig[process.env.NODE_ENV || "development"]);
// "build": "cd <fe directory> && npm run build"
