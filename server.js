const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Tom", lastName: "Hughes" },
    { id: 2, firstName: "Sarah", lastName: "Jay" },
    { id: 3, firstName: "Penny", lastName: "Dew" }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
