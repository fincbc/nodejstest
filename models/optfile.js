var fs = require('fs');
module.exports= {
	readfile: function (path, recall) {
		fs.readFile(path, function (err, data){
			if(err){
				console.log(err);
				recall('文件不存在');
			}else{
		
				recall(data); 
			}
		});
		console.log('optfile');
	},
	writefile:function(path, data, recall){     
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                throw  err;
            }
            console.log('It\'s  saved!'); 

			recall(''); 
          });
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  file)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                console.log("输出图片");
                    res.write(file,'binary');
                    res.end();
            }
        });
    }
}



// var  fs=  require('fs');
// module.exports={
//     readfile:function(path){          //异步执行
//         fs.readFile(path,  function  (err,  data)  {
//             if  (err)  {
//               console.log(err);
//             }else{
//               console.log(data.toString());
//             }
//         });
//         console.log("异步方法执行完毕");
//     },
//     readfileSync:function(path){      //同步读取
//         var  data  =  fs.readFileSync(path,'utf-8');
//         //console.log(data);
//         console.log("同步方法执行完毕");
//         return  data;                
//     }
// }







