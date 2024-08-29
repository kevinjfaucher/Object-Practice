// A more detailed JavaScript object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "cycling", "cooking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },



    /*
    The this keyword in JavaScript refers to the object that is executing the current piece of code. 
    It’s a way to refer to the "current" object within a method or function. 
    The value of this depends on the context in which a function is called.


    Local Scope: When you're inside a function, the function has its own local scope.
    If you reference a variable like firstName without this,
    JavaScript will look for that variable within the function's local scope.
    If it can't find it there, it will look in the outer scope (outside the function).

    Object Properties: The firstName and lastName properties are part of the object itself, 
    not local variables inside the fullName function. To access properties of the object 
    that the function is a method of, you must use "this".


    fullName: function() {
    return firstName + " " + lastName;
    }

    You would get a ReferenceError because firstName and lastName are not defined in the local scope 

    */


    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet: function() {
        console.log("Hello, my name is " + this.fullName() + " and I am " + this.age + " years old.");
    }
};

// Accessing nested object properties
console.log(person.address.city); // Output: Anytown

// Accessing array elements
console.log(person.hobbies[1]); // Output: cycling

// Calling object methods
console.log(person.fullName()); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.



/*
firstName, lastName, age: These are simple properties similar to the previous example.

hobbies: This property is an array that holds multiple values, 
demonstrating how objects can store more complex data structures.

address: This is a nested object within the person object. 

It has its own properties (street, city, zipCode), showing that objects can contain other objects.

fullName and greet: 
These are methods. 

The fullName method combines the first and last name, while 

the greet method uses the fullName method and other properties to create a greeting message.
this keyword: 

It refers to the current object (person)
and is used to access properties and methods within the same object.


*/