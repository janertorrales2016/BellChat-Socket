const http = require('http');
const express = require('express');
const path = require('path');
const {Pool} = require('pg');

//iniciar servidor express
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);


//db connecton
const config ={
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'bellchat'
};
const pool = new Pool(config);

 const gettalgo = async () =>{
    const res = await pool.query('select * from users ');
    console.log(res);
    pool.end();
 }
 gettalgo();

//configuracion
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares

//routes
app.use(require('./routes'));


//export socket
require('./socket.js')(io);


//statis files
app.use(express.static(path.join(__dirname,'public')));

//inicio del servidor
server.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'));
});






