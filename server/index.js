const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 9000;
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "../cc26-linky/build")));

app.use(express.json());
app.use("/", router);
app.use(cors());

//catchhall. any request other than the path in the routes will be sent to react html file.
router.get("*", (req, res) => {
  res.sendFile(path.join(_dirnmae + "../cc26-linky/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is ready and listening on port ${PORT}`);
});
