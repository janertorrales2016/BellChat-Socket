const express = require('express');
const router = express.Router();

const { getLogin, getIndex, getChat } = require('../controllers/index.controller.js');

//Pages
router.get('/', getIndex );

router.get('/chat', getChat);

//API REST
router.get('/users/login', getLogin);

module.exports = router;