//imports librarys
const http = require('http');
const express = require('express');
const path = require('path');
var cors = require('cors');


//iniciar servidor express
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

//config
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//routes
app.use(require('./routes'));


//export socket
require('./socket.js')(io);


//statis files
app.use(express.static(path.join(__dirname,'public')));

//start server
server.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'));
});






