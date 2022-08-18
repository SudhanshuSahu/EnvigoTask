let async =  require('async');
let fetch = require("node-fetch")


let item = [1,2,3,4]
let responses = []


// here limit shows the how much elments in an array should run in parallely, if we write 1 that means iteration wil  be done one each element at a time but if we write 2 as a limit then two elements of array will excuting parallely and all the elements iterated in lesser time .
async.forEachOfLimit(item , 5 , (value,index,callback)=>{
setTimeout(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/"+ value)
    .then(res =>res.json())
    .then(json => {
        responses[index] = json;
        callback(null);
    })
    .catch(err => {
        callback(err)
    })
},1000 * index)
})
.then(()=>console.log(responses))
.catch((err)=>console.log(err));
