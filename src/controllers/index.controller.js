const {Pool} = require('pg');

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
    const {users, password} = req.body;
    const response = await pool.query('select checkuser1($1,$2)', [users, password]);
    res.send(response.rows);
}




module.exports = {
    getLogin,
    getIndex,
    getChat

}