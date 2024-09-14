const { login, registerUser } = require("../controller/Authcontroller");
const { userAuthValidation } = require("../middlewares/authValidation");

const router = require("express").Router();

router.post("/register", userAuthValidation, registerUser);
router.post("/login", userAuthValidation, login);

module.exports = router;
