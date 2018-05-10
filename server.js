var express = require('express');
var app = express();

//ruteo de estaticos
app.use('*/css',express.static('public/assets/css'));
app.use('*/js',express.static('public/assets/js'));
app.use('*/images',express.static('public/assets/images'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.listen(4000, function(){
  console.log('¡Express está listo! en el servidor http://localhost:4000');
});