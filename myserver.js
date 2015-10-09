var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser=require('body-parser');

var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var server = app.listen(34343, '127.0.0.1', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

})

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
})

/*Login Credentials check*/
app.get('/data', function (req, res) {

 var fileName = "emails.json";
 fs.readFile(fileName, "utf8", function(error, data){
console.log(data+"\n");
  res.write(data);
  res.end();
});
 //console.log("here2");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
  res.sendFile( __dirname + req.params[0]); 
});

