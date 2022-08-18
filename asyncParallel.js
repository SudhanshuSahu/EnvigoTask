const async= require("async")


// Using parallel method to execute all the functions parallely and showed in an array
async.parallel([
    async () => await Promise.resolve("Promise1 got resolved"),
    async ()=>  await Promise.resolve("Promise2 got resolved"),
    async ()=>  await Promise.reject("Promise2 got rejected")
    
])
.then(res=> {console.log("response :",res)
})
.catch(err => {      // if any sigle function got failed it will show only the error
    console.log("error", err.message);
})


// To get rid of this problem(if any sigle function got failed it will show only the error) we will use async.reflect
async.parallel([
    async.reflect(async () => await Promise.resolve("Promise1 got resolved")),
    async.reflect(async ()=>  await Promise.resolve("Promise 2 got resolved")),
    async.reflect(async ()=>  await Promise.reject("Promise3 got rejected"))
    
])
.then(res=> {console.log("response :",res)
})
.catch(err => {    
    console.log("error", err.message);
})













