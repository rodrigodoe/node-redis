const express = require("express");
const app = express();
const personRoutes = require("./routes/person");

const PORT = 4000;

app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`));

app.use("/person", personRoutes);

app.all("*", (req, res) => {
  res.status(404).send("NOT FOUND");
});
