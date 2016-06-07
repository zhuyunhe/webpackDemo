var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function(req,res){
	var pathname = __dirname+url.parse(req.url).pathname;
	console.log(__dirname);
	console.log(url.parse(req.url).pathname);
	if(path.extname(pathname)==''){
		pathname += '/';
	}
	if(pathname.charAt(pathname.length-1)=='/'){
		pathname += 'index.html';
	}
	fs.exists(pathname,function(exists){
		if(exists){
			switch(path.extname(pathname)){
				case '.html':
					res.writeHead(200,{"Content-Type":"text/html"});
				break;
				case '.js':
					res.writeHead(200,{"Content-Type":"text/javascript"});
				break;
				case '.css':
					res.writeHead(200,{"Content-Type":"text/css"});
				break;
				case '.gif':
					res.writeHead(200,{"Content-Type":"text/gif"});
				break;
				case '.jpg':
					res.writeHead(200,{"Content-Type":"text/jpg"});
				break;
				case '.png':
					res.writeHead(200,{"Content-Type":"text/png"});
				break;
				default:
					res.writeHead(200,{"Content-Type":"application/octet-stream"});
			}
			fs.readFile(pathname,function(err,data){
				res.end(data);
			});
		} else{
			res.writeHead(404,{"Content-Type":"text/html"});
			res.end("404 not found");
		}
	});
}).listen(8080,'127.0.0.1');
console.log('server running on port 8080');