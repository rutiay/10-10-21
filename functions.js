const chalk = require("chalk");
const fs = require("fs");

function getSumOfArray(arr) {
    let sum = 0;
    for (const iterator of arr) {
        sum += iterator;
    }
    return sum;
}

function printSumInBlue(arr){
    let sum = getSumOfArray(arr);
    console.log(chalk.green(sum));
}

function printSumInBold(arr){
    let sum = getSumOfArray(arr);
    console.log(chalk.yellow.bold(sum));
}

function addTextToFile(myStr){
    fs.appendFileSync("./text.txt", myStr);
}

function readFromFile(fileName){
    fs.readFile(fileName, "utf8", (error, data) => {
        if(error){
            console.log("Error!");
        }
        else{
            console.log(data);
        }
    });
}

function readFromFileSync(fileName){
    console.log(fs.readFileSync(fileName, "utf8"));
}

function addTextToChosenFile(fileName, text){
    fs.appendFileSync(fileName, text);
}

module.exports.getSum = getSumOfArray;
module.exports.printBlueSum = printSumInBlue;
module.exports.printBoldSum = printSumInBold;
module.exports.addText = addTextToFile;
module.exports.readFromFile = readFromFile;
module.exports.readFromFileSync = readFromFileSync;
module.exports.addToFile = addTextToChosenFile;