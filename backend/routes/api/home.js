const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { Question } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        order: [["createdAt", "DESC"]],
        include: [{ model: db.User }]
    });
    // console.log("jhjkhj", questions)
    res.json(questions);
}));

// router.post('/', asyncHandler(async function (req, res) {

// }))

module.exports = router;