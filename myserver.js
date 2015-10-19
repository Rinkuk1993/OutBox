var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser=require('body-parser');

//for reading local email.json file
var cors = require('cors')

app.use(express.static(__dirname + '/public'));

app.use(cors());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


//Server
app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), 'localhost', function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)

})

/*Home page*/
app.get('/', function (req, res) {
	res.sendFile(__dirname +'/index.html');
})

/*Data Retrieve*/
app.get('/data', function (req, res) {
	var fileName = "emails.json";
	fs.readFile(fileName, "utf8", function(error, data){
		res.write(data);
		res.end();
	});
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
	res.sendFile( __dirname + req.params[0]); 
});

