const async = require("async")
const fs = require("fs")

const fileList = ['asyncParallel.js','asyncSeries.js','asyncWaterfall.js'];
const withMissingFileList = ['asyncParallel.js','asyncWaterfall.js','node.js'];

// asynchronous function that returns the file size in bytes
function getFileSizeInBytes(file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, stat.size);
    });
}

// Using callbacks
async.map(fileList, getFileSizeInBytes, function(err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
});

//Error Handling
async.map(withMissingFileList, getFileSizeInBytes, function(err, results) {
    if (err) {
        console.log(err.message);
        
    } else {
        console.log(results);
    }
});