const express = require('express')
const asyncHandler = require('express-async-handler');
// const db = require('../../db/models');

const { Question, User, Answer, Topic } = require('../../db/models');
// const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        // order: [["id", "DESC"]],
        include: [{ model: User }, { model: Answer }, { model: Topic }]
    });
    const topics = await Topic.findAll();
    let body = { questions, topics }
    // console.log("jhjkhj", questions)
    res.json(body);
}));


router.post('/', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    let { question, description, topicId, image } = req.body

    const newPost = await Question.create({
        question,
        description,
        topicId,
        image,
        userId
    });


    res.json(newPost);
}))

module.exports = router;
