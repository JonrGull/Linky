const express = require("express");
const res = require("express/lib/response");
const PORT = process.env.PORT || 5000;
const router = require("./routes");

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is ready and listening on port ${PORT}`);
});
