//console.log("Hello World");

let oldArray = [1, 2, 4];
let newArray = [3, 5, 6];
let combinedArray = [...oldArray, ...newArray, 7, 8];

//console.log(combinedArray);

function sumValues(...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    console.log("Sum: " + sum);
}

//sumValues(15,16,9);

let dynamicFunction = function (value) {
    return value;
}

//console.log(dynamicFunction("This is dynamic function"));

let laptop = { cpu: "5600g", ram: 8, ssd: 256, gaming: false };
for (property in laptop) {
    //console.log(property);
    //console.log(property + ':' + laptop[property]);
}

