const express = require("express");

const app = express();

app.get("/api/redcross", (req, res) => {
  const redCross = [
    { id: 1, name: "Tom", type: "Tiger" },
    { id: 2, name: "Sarah", type: "Swan" },
    { id: 3, name: "Gary", type: "Goat" }
  ];

  res.json(redCross);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
