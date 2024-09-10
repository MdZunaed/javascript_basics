class Computer {
    brand = "AMD";
    static motherboardModel = "Gigabyte B450m Auros Elite";

    constructor({ cpu, ram, ssd, gpu }) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.ssd = ssd;
    };

    runComputer() {
        console.log(`Starting PC with ${this.cpu}, ${this.gpu}, ${this.ram} ram, & ${this.ssd} ssd`);
    }

    showBrandName() {
        console.log(this.brand);
    }
}

let zunaedsComputer = new Computer({ cpu: "Ryzen 5500", gpu: "GTX 1650", ram: "16gb", ssd: "512 gb" });

// zunaedsComputer.runComputer();
// zunaedsComputer.showBrandName();
// console.log(Computer.motherboardModel);

class Laptop extends Computer {

    webcam = "25 mp";

    showCpuName() {
        console.log(this.cpu);
    }

    useParentClassMethod() {
        super.runComputer();
    }
}

let zunaedsLaptop = new Laptop({ cpu: "i5 8500", gpu: "GTX 1650", ram: "16gb", ssd: "512 gb" });

console.log(zunaedsLaptop.brand);
zunaedsLaptop.showCpuName();