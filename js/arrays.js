
const fruits = ["Mango", "Banana", "Orange", "Apple"];
const numbers = [40, 32, 47, 2, 10, 58, 5];

// fruits.sort();
// console.log(fruits);

numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

console.log(fruits);

console.log(fruits[0]);

fruits.push("Cherry");
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(fruits[fruits.length - 1]);



// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()