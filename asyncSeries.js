let async = require("async")

//Run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. Otherwise, callback receives an array of results when tasks have completed.


//using call back
// async.series([
//     function task1(callback){
//         console.log("task 1")
//         setTimeout(() => {
//             console.log("this task 1 to be executed 1st")
//             callback(null,"one")
//         }, 2000);
//     },
//     function task2(callback){
//         console.log("task 2")
//         setTimeout(()=>{
//             console.log("this is task2 to be executed 2nd");
//             callback(null,"Two")
//         },3000)
//     },
//     function task3(callback){
//         console.log("Task 3");
//         setTimeout(()=>{
//             console.log("This is task 3 to be executed 3rd");
//             callback(null,"three")
//         },2000)
//     }
// ], function(err,result){
//     console.log(result);
// })



//Using objects instead of an array
// async.series({
//     one : function task1(callback){
//         console.log("Task1");
//         setTimeout(() => {
//             console.log("this is task 1 to be executed");
//             callback(null,1)
//         }, 2000);
//     },
//     two: function task2(callback){
//         console.log("Task2");
//         setTimeout(() => {
//             console.log("This is task 2 to be executed");
//             callback(null,2)
//         }, 3000);
//     }

// }, function(err,result){
//     console.log(result);
// })

 

//Using Promises

// async.series({
//     one : function task1(callback){
//         console.log("Task1");
//         setTimeout(() => {
//             console.log("this is task 1 to be executed");
//             callback(null,1)
//         }, 2000);
//     },
//     two: function task2(callback){
//         console.log("Task2");
//         setTimeout(() => {
//             console.log("This is task 2 to be executed");
//             callback(null,2)
//         }, 3000);
//     }
// })
// .then(result => console.log(result))
// .catch(err => console.log("this is an error :" ,err))




//Using aync await

async function tasks(){
    try {
        let results = await async.series([
            function(callback) {
                setTimeout(function() {
                    
                    callback(null, 'one');
                }, 200);
            },
            function(callback) {
                setTimeout(function() {
                    
                    callback(null, 'two');
                }, 100);
            }
        ]);
        console.log(results);
        
    }
    catch (err) {
        console.log(err);
    }
}

tasks()





