var  http  =  require('http');
// var  optfile  =  require('./models/optfile'); 
var  url = require('url');
var  router= require('./models/router');
http.createServer(function  (request,  response)  {
	// response.writeHead(200, {'Content-Type': 'image/jpeg'})
    // response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  
    	var pathname= url.parse(request.url).pathname;
        	pathname= pathname.replace(/\//g, '');
        try{
        	router[pathname](request,  response);
        }catch(err){
        	response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
        	response.write(err.toString());
        	response.end('555')
        }
 			
 			console.log(pathname);
        
         
    }
}).listen(8080);
console.log('Server  running  at  http://127.0.0.1:8000/');













