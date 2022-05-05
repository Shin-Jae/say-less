const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Question, User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const question = await Question.findByPk(id);
    res.json(question);
}))

router.put('/:id', requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userId = req.user.id;
    const { question, description, topic } = req.body;
    const editQuestion = await Question.findByPk(id);
    if (description === '') description = null;
    if (topic === '') topic = null;

    // if (handleValidationErrors.isEmpty()) {
    editQuestion.question = question;
    editQuestion.description = description;
    editQuestion.topic = topic;


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

module.exports = router;
