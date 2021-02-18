const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { loginValidation, registerValidation } = require("../validation");

// signup
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // validate before making a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if user already in the database
  const isEmailExits = await User.findOne({ email });
  if (isEmailExits)
    return res.status(400).send({ error: "Email already exists." });

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();

    // create and assign a Token
    const token = await jwt.sign(savedUser.id, process.env.TOKEN_SECRET);
    res.status(201).json({ data: savedUser, token: token });
  } catch (e) {
    res.status(400).json({ error: "Failed to create the user." });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;

  // validate the user data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // check if the user exists
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(404)
      .send({ error: "No user specified with this email address." });

  // verifying the password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: "Invalid password." });

  //create and assign a token
  const token = await jwt.sign(user.id, process.env.TOKEN_SECRET);
  res.status(200).send({ token: token, userId: user.id });
};

module.exports.signup = signup;
module.exports.login = login;
