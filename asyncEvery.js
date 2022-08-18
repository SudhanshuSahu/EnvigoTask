let async = require("async")


//It return True of false but if any of the element fails i  iteratee method then will return false

async.every([4,2,8,16,1,20,44], function(number, callback) {
    if(number%2 == 0){
       callback(null, true);
    }else{
      callback(null, false);
    }
}).then(res => console.log(res))
.catch(err => console.log(err))