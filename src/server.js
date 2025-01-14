const express = require("express");
const Config = require("./config");
const database = require("./config/database");
const todoRoutes = require("./routes/todo")
const cors = require("cors");
const app = express();




database.connect();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

app.use(express.json());
app.use("/api/v1/todo", todoRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

console.log("PORT: ", Config.PORT)

app.listen(Config.PORT, () => {
  console.log(`App is running at ${Config.PORT}`)
})