const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { Question } = require('../../db/models');
// const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        order: [["id", "DESC"]],
        include: [{ model: db.User }]
    });
    // console.log("jhjkhj", questions)
    res.json(questions);
}));

router.post('/', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { question, description, topic } = req.body

    const newPost = await Question.create({
        question,
        description,
        topic,
        userId
    });
    res.json(newPost);
}))

module.exports = router;
