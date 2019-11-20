const reader = require("readline-sync");
const util = require("./converter.js");


let a = reader.questionInt("Insert the decimal number ");

console.log(util.convertToBinary(a));
console.log(util.convertToHexa(a));