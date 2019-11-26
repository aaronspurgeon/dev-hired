const router = require("express").Router();
const verify = require("./privateRoute");

router.get("/", verify, (req, res) => {
  res.json({ jobs: { company: "Google", role: "Software Developer" } });
});

module.exports = router;
