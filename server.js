const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const mainRouter = require("./routes/main");
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});
