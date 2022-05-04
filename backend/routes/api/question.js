const express = require('express')
const asyncHandler = require('express-async-handler');

const { Question, User } = require('../../db/models');
const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const question = await Question.findByPk(id);
    console.log("jhjkhj", question)
    res.json(question);
}))

module.exports = router;
