const express = require('express')
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/home', asyncHandler(async function (req, res) {

}));

router.post('/home', asyncHandler(async function (req, res) {

}))

module.exports = router;
