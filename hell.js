var http= require('http');
var Teacher= require('./models/teacher.js')
var otherfun= require('./models/otherfuns.js');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html; charset= utf-8'});
	if(request.url!== '/favicon.ico'){
		teacher= new Teacher(1, '张三', '25', '高三八班');
		teacher.enter();
		teacher.teach();
		response.end('');

	}
}).listen(8080);


 











