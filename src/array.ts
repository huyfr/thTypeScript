import './scss/styles.scss';

/**
 * Array
 */

// declare an array

const list: number[] = [1, 2, 3];

const categories: Array<string> = ["Sport", "IT", "Car"];

console.log("List");
list.forEach((num) => console.log(num));

console.log("Categories");
categories.forEach((str) => console.log(str));

const result = categories.filter(str => str.length > 2);
result
console.log(result);

let x: [string, number];
x = ["hello", 10];
console.log(x[0].substr(1));

x[3] = "world";
x[5] = 100.25;
console.log(x[5].toString());

// x[6] = true;