const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const homeRouter = require('./home.js');
const questionRouter = require('./question.js')
const topicRouter = require('./topic.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/home', homeRouter);

router.use('/question', questionRouter);

router.use('/topic', topicRouter);

module.exports = router;
