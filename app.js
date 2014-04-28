// web.js

var express = require("express");
var path = require('path');
var http = require('http');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, '/')));
});

http.createServer(app).listen(app.get('port'), function() {
console.log('Listening on port' + app.get('port'));
});


/*app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){ // req = request, res = response
    console.log('Render html');
    
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    
    if(url_parts.pathname == '/') {
      // file serving
      fs.readFile('./index.html', function(err, data) {
         res.end(data);
      });
    }
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});*/
/*var express = require("express");
var app = express();

// setting up view for index.html, setting up views logic 
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){ // req = request, res = response
    console.log('Render html');
    
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    
    if(url_parts.pathname == '/') {
      // file serving
      fs.readFile('./index.html', function(err, data) {
         res.end(data);
      });
    }
});



app.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');*/