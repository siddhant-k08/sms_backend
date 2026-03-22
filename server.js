require("dotenv").config();
const express = require("express");
const cors = require("cors");

const subscriptionRoutes = require("./routes/subscriptions");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});