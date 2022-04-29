const express = require("express");
const config = require("../../knexfile");
const knex = require("knex")(config);
const router = express.Router();
const cors = require("cors");
const { async } = require("rxjs");
router.use(cors());

require("dotenv").config({
  path: ".../.env",
});
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
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
  res.status(200).send(JSON.stringify(results));
});


router.get("/tags", async (req, res) => {
  const input = req.query;
  const tags = await knex.select("id", "tags").from("posts");
  const validPosts = tags
    .filter((el) => el.tags.includes(input))
    .map((el) => el.id);

  const output = await knex
    .select("id", "link", "tags", "description")
    .from("posts")
    .whereIn("id", validPosts);

  res.status(202).send(output);
});

//Post request
router.post("/newpost", async (req, res) => {
  await knex("posts").insert({
    link: req.body.link,
    description: req.body.description,
    tags: JSON.stringify(req.body.tags.split(",")),
  });
});
module.exports = router;

