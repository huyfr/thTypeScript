"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./scss/styles.scss");
var list = [1, 2, 3];
var categories = ["Sport", "IT", "Car"];
console.log("List");
list.forEach(function (num) { return console.log(num); });
console.log("Categories");
categories.forEach(function (str) { return console.log(str); });
var result = categories.filter(function (str) { return str.length > 2; });
result;
console.log(result);
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
x[3] = "world";
x[5] = 100.25;
console.log(x[5].toString());
//# sourceMappingURL=array.js.map