const express = require('express');
const router = express.Router();

router.use('/list', require("./List"))

module.exports = router;
