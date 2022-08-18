const async = require("async")
const fs = require("fs")

//async.reduce return a single values using an async iteratee function


 
const fileList = ['asyncParallel.js','asyncSeries.js','asyncWaterfall.js'];
const withMissingFileList = ['asyncParallel.js','asyncWaterfall.js','node.js'];

// asynchronous function that returns the total sizes of all the file in bytes
function getFileSizeInBytes(memo ,file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, memo + stat.size);
    });
}

// Using callbacks
async.reduce(fileList,0, getFileSizeInBytes, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

//Error Handling
async.reduce(withMissingFileList,0, getFileSizeInBytes, function(err, result) {
    if (err) {
        console.log(err);
        
    } else {
        console.log(result);
    }
});