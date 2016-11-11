var  http  =  require('http');
// var  optfile  =  require('./models/optfile');
var  url = require('url');
var  router= require('./models/router');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        var pathname= url.parse(request.url).pathname;
        	pathname= pathname.replace(/\//g, '');
 			router[pathname](request,  response);
        // optfile.readfile('./views/login.html', response);
        //不写则没有http协议尾
    }
}).listen(8080);
console.log('Server  running  at  http://127.0.0.1:8000/');

















