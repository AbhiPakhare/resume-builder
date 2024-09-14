const expresss = require("express");
const app = expresss();

require("dotenv").config();
require("./utils/db");
const port = process.env.PORT || 3000;
const cors = require("cors");
const AuthRoutes = require("./Routes/AuthRoutes");

app.use(expresss.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/auth", AuthRoutes);
app.get("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).json({ message: "email or password is not found" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
