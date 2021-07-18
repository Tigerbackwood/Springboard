class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'beep';
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} made in ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
    }
    toString() {
        return super.toString() + ` the number of wheels is ${this.numWheels}`
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;        
    }

    revEngine() {
        return `VROOM!`;
    }
}

class Garage {
    constructor(spaces) {
        this.spaces = spaces;
        this.vehicles = [];
    }

    add(vehicle) {
        if (vehicle instanceof Vehicle === false) {
            return `We only accept Vehicles!`;
        } else if (this.spaces <= this.vehicles.length) {
            return `Sorry! We are out of space!`;
        } else {
            this.vehicles.push(vehicle)
            return `Vehicle added to the garage!`;
        }
    }
}
let garage = new Garage(2);
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
let myFirstCar = new Car("Toyota", "Corolla", 2005);
