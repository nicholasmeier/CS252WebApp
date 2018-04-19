var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("index.html", "utf8");
        response.write(html);
    } else if (pathname == "/Main.js") {
        script = fs.readFileSync("Main.js", "utf8");
        response.write(script);
    } else if (pathname == "/cat.js") {
        script = fs.readFileSync("cat.js", "utf8");
        response.write(script);
    } else if (pathname == "m.cur") {
        script = fs.readFileSync("m.cur", "utf8");
        response.write(script);
    } else if (pathname == "/mouse.jpg") {
        script = fs.readFileSync("mouse.jpg", "utf8");
        response.write(script);
    } else if (pathname == "/Kevin_MacLeod_-_01_-_Impact_Prelude.mp3") {
        script = fs.readFileSync("Kevin_MacLeod_-_01_-_Impact_Prelude.mp3", "utf8");
        response.write(script);
    }
    response.end();
}).listen(8888);

console.log("Listening to server on 8888...");

/*const express = require('express')
const app = express()
var path = require('path')

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(__dirname, 'public'))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'test.js'))
})

app.listen(3000, () => console.log('listen on port 3000'))

app.post('')*/
/*
const http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');

//
const hostname = '127.0.0.1';
const port = 3000;


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/