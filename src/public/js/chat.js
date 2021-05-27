$(function () {

    const socket = io();
    socket.emit('send message', 'hola');

    
    socket.on('new message', function (data){
        
    });


    socket.on('disconnect', function (data){
        
    });

})