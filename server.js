var http = require('http');
var path = require('path');
var fs = require('fs');

extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg",
	".mp3" : "audio/mpeg"
};

function getFile(filePath, res, mimeType){
	fs.exists(filePath, function(exists){
		if (exists){
			fs.readFile(filePath, function(err,contents){ //check if there is an error
				if (!err){
					//Write file to response
					/*res.writeHead(200,{
						"Content-type" : mimeType,
						"Content-Length" : contents.length
					});*/
					res.end(contents);
					//console.log("File sent successfully");
				}else {
					//print out error
					console.log("Error : ");
					console.dir(err);
				};
			});
		} else {
			console.log("could not find: " + filePath);

			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end("&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;404 file not found&lt;/body&gt;&lt;/html&gt;");
		};
	});
};

var server = http.createServer(function(req, res){
	var fileName = path.basename(req.url) || 'index.html'; 
	var ext = path.extname(fileName); // extension for filename
	var localFolder = __dirname + '/';

	console.log("Recieved request for " + fileName + " in the folder : " + localFolder);

	if (!extensions[ext]){
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end("&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;The requested file type is not supported&lt;/body&gt;&lt;/html&gt;");
	}

	getFile((localFolder + fileName), res, extensions[ext]);
});

server.listen(3000);