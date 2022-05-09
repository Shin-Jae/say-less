const express = require('express')
const asyncHandler = require('express-async-handler');
// const { requireAuth } = require('../../utils/auth');
const { Topic } = require('../../db/models');
// const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    console.log("djksfjakldfjklsafds")
    const topics = await Topic.findAll()
    res.json(topics);
}))

module.exports = router;
