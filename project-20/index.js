const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", usersRoutes);
app.listen(3000);
