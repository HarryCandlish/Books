const express = require("express");

const app = express();

app.get("/api/animals", (req, res) => {
  const animals = [
    { id: 1, name: "Tom", type: "Tiger" },
    { id: 2, name: "Sarah", type: "Swan" },
    { id: 3, name: "Gary", type: "Goat" }
  ];

  res.json(animals);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
