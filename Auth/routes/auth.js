const router = require("express").Router();
const User = require("../model/User");

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

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
