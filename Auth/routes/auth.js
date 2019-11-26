const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

// Validation
const Joi = require("@hapi/joi");

const schema = {
  name: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(6)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .required()
};

router.post("/register", async (req, res) => {
  // Validate the data before new user
  //   const { error } = schema.validate(req.body, schema);
  //   if (error) return res.status(400).send(error.details[0].message);

  // Checking if user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email is already registered!");

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  // Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("No account with this email!");

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or password is invalid");

  res.send("Logged in!");
});

module.exports = router;
