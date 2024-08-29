// A basic JavaScript object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue",
    start: function() {
        console.log("The car is starting...");
    }
};

// Accessing object properties
console.log(car.make);  // Output: Toyota
console.log(car.model); // Output: Corolla
console.log(car.year);  // Output: 2021
console.log(car.color); // Output: Blue

// Calling an object method
car.start(); // Output: The car is starting...
