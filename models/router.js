var  optfile  =  require('./optfile');
var url = require('url');
var  querystring  =  require('querystring');

module.exports= {
	login:function (req, res){
		
		  //--------get方式接收参数----------------     
	/*    
        var rdata= url.parse(req.url,true).query;      
            console.log(rdata);    
        if(rdata['email']!=undefined){  
            console.log(rdata['email']);      
                                }            */
          //-------post方式接收参数---------------- 
          var post= '';
          req.on('data', function (ck){
          		post+= ck;
          });
          req.on('end', function (){
          		post = querystring.parse(post);
          		// console.log('email:'+post['email']+'\n');
          		// console.log('pwd:'+post['pwd']+'\n');
          		// recall= getrecall(res);
          		arr = ['email','pwd'];
           	 	function recall(data){
	                var dataStr = data.toString();
	                for(var i=0;i<arr.length;i++){
	                    re = new RegExp('{'+arr[i]+'}','g'); // /\{name\}/g
	                    if(post['email']&& post['pwd']){
	                    	dataStr = dataStr.replace(re,post[arr[i]]);
	                    }else{
	                    	dataStr = dataStr.replace(re,'');
	                    }
                	}
                	res.write(dataStr);
                	res.end('');//不写则没有http协议尾
            	}
          	optfile.readfile('./views/login.html', recall);
 	 
          });
		console.log('router');
	},
	zhuce:function (req, res){
		
		recall= getrecall(res);
		optfile.readfile('./views/zhuce.js', res);
	},
	writefile:function (req, res){
		
		recall= getrecall(res);
		optfile.writefile('./views/one.js','我来了 !', recall);
		// res.end();
	},
	showimg:function (req, res){
		res.writeHead(200,  {'Content-Type':'image/jpeg'});
		optfile.readImg('./imgs/xi.jpg',res);
	}
}


function getrecall( res){
	function recall(data) {
		res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
		res.write(data);
		res.end();
	}
	return recall;
}




