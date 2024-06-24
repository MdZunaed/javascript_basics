console.log("Hello World");

//////////////// variable

const a = 7;
const b = 8;


//////////////// statement

if (a > b) {
    console.log("a is greater than b");
} else if (a == b) {
    console.log("a equal b");
} else {
    console.log("b is greater than a");
}

console.log(typeof a);

//////////////// object

let Car = {
    Brand: "Supra",
    model: "MK5",
    power: 680,
    isSuperCar: true,
    startCar: function () {
        console.log(this.Brand + ' ' + this.model + ' starting at ' + this.power + ' horse power.');
    }

}

let supra = Car;
console.log(supra.Brand);
supra.startCar();



