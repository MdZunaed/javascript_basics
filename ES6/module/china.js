export { laptop };
export { mobile };
export { Computer };

let laptop = "Asus Laptop, HP Laptop";

function mobile() {
    console.log("Mobile Phone from China");
}

class Computer {
    cpu = "Ryzen 5 5500";
    gpu = "GTX 1650";
    constructor() {
        alert("Please check inspect ---> Console");
    }

    runComputer() {
        console.log("Computer Started");
    }
}
