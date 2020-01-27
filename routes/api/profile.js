const express = require("express");
const router = express.Router();

// @route       GET api/profile/test
// @description Tests profile router
// @access      Public

router.get("/test", (req, res) => res.json({ msg: "profile Works" }));

module.exports = router;
