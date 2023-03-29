// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    break() {
        this.speed = this.speed - 5;
        console.log(`'${this.make}' going at ${this.speed} km/h`)
        return this;
    }
}

class EVCl extends CarCl {
    #charge
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this;
    }

    accelerate() {
        this.speed = this.speed + 20;
        this.#charge = this.#charge - 1
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`)
        return this
    }
}

const car1 = new EVCl("Tesla", 120, 40);
console.log(car1)
car1
    .accelerate()
    .accelerate()
    .break()
    .chargeBattery(90)
    .accelerate()
    .break()
