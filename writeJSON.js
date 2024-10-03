const { rejects } = require('assert');
const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const { json } = require('stream/consumers');










function readDirectory(folderName){
    return new Promise((resolve, rejects) => {
        fs.readdir(folderName, (error, fileNames) => {
            if (error) {
                rejects(error)
            }
            else{
                resolve(fileNames)
            }
        });
    });
};