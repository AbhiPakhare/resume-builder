const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User.model");

const registerUser = async (req, res) => {
  const { email, password: plainTextPassword } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists", success : false });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

  const user = new UserModel({ email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ token });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: "email or password is not found" });
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "email or password is not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "email or password is not found" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({ token });
};

module.exports = {
  login,
  registerUser,
};
