var async = require('async');   

function exec(){  
    async.waterfall([   
        function(done){  
            var i=0;  
            setInterval(function(){  
                console.log('aaa='+new Date()+ '赶车' +i);  
                i++;  
                if(i===3){  
                    clearInterval(this);  
                    done(null, '旺旺');  
                }  
            },1000);  
        },  
        function(preValue, done){  
            var i='b';  
            setInterval(function(){  
                console.log(i+ '逗'+ preValue);  
                i+= i;  
                if(i.length> 8){  
                    clearInterval(this);  
                    done('555', preValue+'呵呵');  
                }  
            },1000);  
        },
        function(preValue, done){  
            var i=1;  
            setInterval(function(){  
                console.log(i+'傻'+ preValue);  
                i+= i;  
                if(i > 8){  
                    clearInterval(this);  
                    done(null, preValue+'哥哥');  
                }  
            },1000);  
        }  
    ],  
        function(err,rs) {   
            console.log(err);  
            console.log(rs);  
        });  
    console.log('主程序完')
}  
exec();   


// function exec(){  
//     async.parallel({   
//         one: function(done){  
//             var i=0;  
//             setInterval(function(){  
//                 console.log('aaa='+new Date()+ '赶车' +i);  
//                 i++;  
//                 if(i===3){  
//                     clearInterval(this);  
//                     done('haha','张涨');  
//                 }  
//             },1000);  
//         },  
//         two: function(done){  
//             var i='b';  
//             setInterval(function(){  
//                 console.log(i+'逗');  
//                 i+= i;  
//                 if(i.length> 8){  
//                     clearInterval(this);  
//                     done(null,'呵呵');  
//                 }  
//             },1000);  
//         }  
//     },  
//         function(err,rs) {   
//             console.log(err);  
//             console.log(rs);  
//         });  
// }  
// exec();   