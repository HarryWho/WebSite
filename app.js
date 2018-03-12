var express= require('express');

var app = express();

app.get('/', function(req, res){
    res.send("HERE I AM");
});



app.listen(5001, function(){
    console.log("Server is now listening for a connection");
});