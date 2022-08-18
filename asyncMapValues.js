const async = require("async")
const fs = require("fs")


//async.mapValues is used for objects,Produces a new Object by mapping each value of obj through the iteratee function.
const fileMap = {
    f1: 'asyncParallel.js',
    f2: 'asyncSeries.js',
    f3: 'asyncWaterfall.js'
};

const withMissingFileMap = {
    f1: 'asyncParallel.js',
    f2: 'asyncSeries.js',
    f3: 'file.txt'
};

// asynchronous function that returns the file size in bytes , this is an iteratee function which takes parameter (val, key,callback)
function getFileSizeInBytes(file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, stat.size);
    });
}

// Using callbacks
async.mapValues(fileMap, getFileSizeInBytes, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

//Error Handling
async.map(withMissingFileMap, getFileSizeInBytes, function(err, results) {
    if (err) {
        console.log(err.message);
        
    } else {
        console.log(results);
    }
});