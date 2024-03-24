const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/cars", (req, res) => {
  res.status(200).send({
    car: "++",
    name: "bmw",
  });
});

app.post("/cars/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    car: `car logo = ${logo} and ID = ${id}`,
  });
});

app.listen(PORT, () => {
  PORT;
});
