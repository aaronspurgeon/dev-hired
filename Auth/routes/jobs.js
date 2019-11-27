const router = require("express").Router();
const verify = require("./privateRoute");
const Jobs = require("../model/Jobs");

// Get all the jobs posted by the user
router.get("/", verify, async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a job applied for
router.post("/", verify, async (req, res) => {
  const job = new Jobs({
    company: req.body.company,
    title: req.body.title
  });

  try {
    const savedJob = await job.save();
    res.json(savedJob);
  } catch (err) {
    res.json({ message: err });
  }
});

// Grab a specific job
router.get("/:jobId", verify, async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.jobId);
    res.json(job);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a job
router.delete("/:jobId", verify, async (req, res) => {
  try {
    const removeJob = await Jobs.remove({
      _id: req.params.jobsId
    });
    res.json(removeJob);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
