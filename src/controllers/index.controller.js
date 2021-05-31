//imports
const {Pool} = require('pg');

//connection BD
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'bellchat',
    port: '5432'
});

//Routers page
const getIndex = (req, res) =>{
    res.render('index.html', {title: 'BellChat'});
}

const getChat = (req, res) =>{
    res.render('chat.html',{title: 'Chat BellChat'});
}

//routers ApiRest
const getLogin = async (req, res) =>{
    const users= req.params.users;
    const password = req.params.password;
    const response = await pool.query('select checkuser1($1,$2)', [users, password]);
    res.send(response.rows);
}

const postInsertUsers = async (req, res) =>{
    const {firstname, lastname, email, phone, city} = req.body;
    const response = await pool.query('select insert_peoples($1, $2,$3,$4,$5)', [firstname, lastname, email, phone, city]);
    res.json({
        message: 'User Add Succesfully',
        body:{
            user: {firstname, lastname}
        }
    });
}


//exports functions
module.exports = {
    getLogin,
    getIndex,
    getChat,
    postInsertUsers
}