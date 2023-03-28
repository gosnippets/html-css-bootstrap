// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Cars = function (make, speed) {
    this.make = make
    this.speed = speed
}

Cars.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`)
}

Cars.prototype.break = function () {
    this.speed = this.speed - 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`)
}

const car1 = new Cars("BMW", 150);
const car2 = new Cars("Mercedes", 130);

console.log("BMW")
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();
car1.break();

console.log("Mercedes")
car2.accelerate();
car2.accelerate();
car2.break();
car2.break();
car2.break();
