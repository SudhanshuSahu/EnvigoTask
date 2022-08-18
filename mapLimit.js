let async = require("async")
//By using mapLimit we limit tthe async opertion . that means first 3 asynchronous operation get executed and the next
async.mapLimit(['1','2','3','4','5','6','7','8','9'],3, function(num, callback){
    setTimeout(function(){
        num = num * 2,
        console.log(num);
        callback(null, num);
    }, 
    1000);  
    },function(err, results){
        console.log(results);
    });