const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const homeRouter = require('./home.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/home', homeRouter)

module.exports = router;
