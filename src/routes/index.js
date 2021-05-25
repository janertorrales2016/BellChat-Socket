const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index.html', {title: 'BellChat'});
});

router.get('/chat', (req, res) =>{
    res.render('chat.html',{title: 'Chat BellChat'});
});

module.exports = router;