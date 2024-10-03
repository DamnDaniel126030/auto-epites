const { rejects } = require('assert');
const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const { json } = require('stream/consumers');


const folderNameParts = "./subaru_kepek";
const filePathParts = "./parts.json";

const jsonArrayParts = [];
let jsonStringParts = "";

const partPrices = [9999, 9999, 24990, 14990, 399990, 499990, 149990, 199990, 39990, 24990, 29990, 9990, 5990, 7990, 14990, 11990, 19990, 39990, 24990, 34990]

let partImages = [];

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

readDirectory(folderNameParts)
.then((fileNames) => {
    for (let name of fileNames){
        partImages.push(name);
    }
    console.log("OK");
    writeJSONsParts();
})
.catch((error) => {
    console.error("Error reading this directory " + error);
})


function writeJSONsParts(){
    for (let i = 0; i < partPrices.length; i++){
        const id = i + 1;
        const price = partPrices[i];
        const img = partImages[i];
    
        const part = {
            "id": id,
            "price": price,
            "imgName": img
        };
    
        jsonArrayParts.push(part)
    };
    jsonStringParts = JSON.stringify(jsonArrayParts)
    writeJSONFile(filePathParts, jsonStringParts)
        .then((message) => console.log(message))
        .catch((error) => console.error("Error writing this file " + error));
}


function writeJSONFile (filePath, data){
    return new Promise((resolve, rejects) => {
        fs.writeFile(filePath, data, (error) => {
            if (error){
                rejects(error);
            }
            else{
                resolve('OK')
            }
        });
    });
};