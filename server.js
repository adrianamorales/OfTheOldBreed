// web.js
var express = require("express");
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
console.log('Listening on port 3000');