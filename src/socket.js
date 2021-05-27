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

module.exports = function(io){

    io.on('connection', socket =>{
        
        console.log('new connection');

        socket.on('send message', async function(data){
            //save message BD
            const response = await pool.query('select checkuser1($1,$2)');
            console.log(data);
        });
        
    });

    io.on('disconnect', socket =>{
        console.log('user disconnect');
    });

   
}