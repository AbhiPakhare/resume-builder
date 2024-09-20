// const { login, registerUser } = require("../controller/AuthController");
// const { userAuthValidation } = require("../middlewares/authValidation");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.send("register");
});

// router.post("/register", userAuthValidation, registerUser);
// router.post("/login", userAuthValidation, login);

module.exports = router;
