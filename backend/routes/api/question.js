const express = require('express')
const asyncHandler = require('express-async-handler');

const { Question } = require('../../db/models');
const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const questions = await Question.findByPk(req.params.id);
    // console.log("jhjkhj", questions)
    res.json(questions);
}))

module.exports = router;
