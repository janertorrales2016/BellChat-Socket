//imports
const express = require('express');
const router = express.Router();

//resources
const { getLogin, getIndex, getChat, postInsertUsers } = require('../controllers/index.controller.js');

//Pages
router.get('/', getIndex );

router.get('/chat', getChat);

//API REST
router.get('/users/login/:users/:password', getLogin);
router.post('/users/insertUsers', postInsertUsers);

//exports
module.exports = router;
