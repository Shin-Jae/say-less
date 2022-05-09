const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Question, User, Answer } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);

    const question = await Question.findByPk(questionId, {
        include: [{ model: User }, { model: Answer }]
    });
    res.json(question);
}))

router.post('/:id', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const userId = req.user.id;
    const { answer } = req.body;

    const newAnswer = await Answer.create({
        answer,
        questionId,
        userId
    });
    res.json(newAnswer);
}))

router.put('/:id', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userId = req.user.id;
    const { question, description, topicId, image } = req.body;
    const editQuestion = await Question.findByPk(id);
    if (description === '') description = null;

    // if (handleValidationErrors.isEmpty()) {
    editQuestion.question = question;
    editQuestion.description = description;
    editQuestion.topicId = topicId;
    editQuestion.image = image


    await editQuestion.save()
    res.json(editQuestion);
}))

router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const id = parseInt(req.params.id, 10);

    const question = await Question.findByPk(id);
    if (userId !== question.userId) {
        res.status(401);
        return res.send("Invalid")
    }
    await question.destroy();
    return res.send('Success');
}))

router.delete('/answer/:id', requireAuth, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userId = req.user.id;

    const answer = await Answer.findByPk(id);
    if (userId !== answer.userId) {
        res.status(401);
        return res.send("Invalid");
    }
    await answer.destroy();
    return res.send('Success');
}))

module.exports = router;
