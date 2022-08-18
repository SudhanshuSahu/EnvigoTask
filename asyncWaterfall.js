 let async =  require('async');


 //WATERFALL METHOD OF ASYNC : Takes array of functions , run the task -> array of function in series, each passing their result to the next in the array(it means each function pass its result to the next function in the array), if any of the tasks pass an error to their own callback, the next function is not executed, and the main callback is immediately called with the error.
async.waterfall([
    function task1(callback){
        console.log("task 1 started");

        setTimeout(() => {
           console.log("task 1 is executing");
           callback(null,"task 1 isexecuted and will be sen to next function") 
        },3000);
    },
    function task2(task1Result,callback){
        console.log("task1Result");
        setTimeout(()=>{
            console.log("task 2 is executing");
            callback(null,"task 2 is succesfully process and may be sent to the next function")
        },2000)
    }
    ,
    function task3(task2Result,callback){
        console.log("result from task 2 : ", task2Result);
        setTimeout(() => {
            console.log("task 3 executing");
            callback(null)
        }, 1000);
    }

],
function(err){
    if(err){
        console.log("Error Occurred Please check");
    }
    else{
        console.log("All the task is succesfull");
    }
})







//For Reference

// async.waterfall([

//   function task1(callback) {
//     console.log('start!');
//     setTimeout(function(){
//     	console.log("T1 Complete"); 
//     	// Passing value to next task
//     	callback(null, 'Value from Task 1'); 
//      },5000);
     
//   },
//   function task2(task1Result, callback) {
//     console.log(task1Result);
//     setTimeout(function(){
//     	console.log("T2 Complete");
//     	// Passing value to next task
//     	callback(null, 'Value from Task 2');
//       },1000);
    
//   },
//   function task3 (task2Result, callback) {
//     console.log(task2Result);
//     setTimeout(function(){
//     	console.log("T3 Complete"); 
//     	// Passing no value to last callback
//     	callback(null,"This is the last task"); 
//     },100);
   
//   }
// ],
// function (err,result) {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('No error happened in any tasks, all tasks done!' , result);   
//   }
// });






//using promise
// async.waterfall([
//     async () => await Promise.resolve("task 1 Completed"),
//     async() =>  Promise.resolve("task 2 completed"),
//     async() => Promise.reject("task 3 Rejected"),
//     async() =>  Promise.resolve("task 4 executed")
// ])
// .then(res=> console.log("resolve:" , res))
// .catch(err=> console.log("error",err.message))