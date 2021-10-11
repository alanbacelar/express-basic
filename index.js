const express = require("express");
const app = express();
const port = 3001;
const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ hello: "deusimar" });
});

app.get("/people", async (req, res) => {
  // Option 1: Passing a connection URI
  const sequelize = new Sequelize("postgres://alan:alan@localhost:5432/youfy"); // Example for postgres
  const people = await sequelize.query("SELECT * FROM users", {
    type: QueryTypes.SELECT,
  });

  res.json(people);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
