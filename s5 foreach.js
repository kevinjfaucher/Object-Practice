/*

High Level Overview


Breakdown of forEach Syntax

    The Array:
        In this example, numbers is an array: [1, 2, 3, 4, 5].
        The forEach method is called on this array.


    forEach Method:
        forEach is a built-in method in JavaScript that is used to execute a provided function once for each array element.
        The syntax is: array.forEach(callbackFunction).


    Callback Function:
        The function inside forEach is called a callback function because it is "called back" once for each element in the array.
        The syntax for the callback function is: function(parameter) { ... }.


    Parameter:
        The parameter inside the callback function represents the current element of 
        the array during each iteration.

        In our example, the parameter is named number, so during each iteration, 
        number takes the value of the current element of the array.

        The name of the parameter can be anything; it's a placeholder 
        that represents each element as forEach loops through the array.


    Body of the Function:
        The code inside the curly braces { ... } of the callback function is the body of the function. 

        This is where you define what should happen for each element.

        In this example, console.log(number); is the body of the function, which prints the value of number 
        (the current array element) to the console.



*/



// -------------------------------------


// Define the array
const numbers = [1, 2, 3, 4, 5];

// Define the callback function separately
function display(number) {
    console.log(number);
}

// Pass the callback function into forEach
numbers.forEach(display);


// -----------------------------------------------



numbers.forEach(function(number) {
    console.log(number);
});



/*

The Source of the Parameter's Data

The parameter in the forEach callback function (in our earlier example, number)
gets its data directly from the array on which forEach is called.


A callback function is a function that you pass as an argument to another function.
The function you passed it to will "call back" or execute the callback function at a 
certain point, usually after some operation is completed.

Here's a detailed breakdown of the process:


    The Array:
        Let's start with the array: const numbers = [1, 2, 3, 4, 5];.
        This array contains five elements: 1, 2, 3, 4, and 5.


    Calling forEach:
        When you call numbers.forEach(...), the forEach method begins to iterate
         over each element in the numbers array.


    The Callback Function:
        The callback function inside forEach is executed once for 
        each element in the array.
        For each iteration, the current element from the array is 
        passed as an argument to the callback function.


    The Parameter (number):
        The parameter number inside the callback function receives the value of the current array element
         during each iteration.
        Essentially, JavaScript automatically takes the current element from the array and assigns it to 
        the parameter (number) before running the body of the function.







        NOTES:

    The forEach method in JavaScript is designed to work in a specific way, and understanding how it handles the callback function and its parameters will make this clearer.
    How forEach Works with the Callback Function

    forEach Method:
        forEach is a method that iterates over each element in an array.
        It expects you to pass a callback function as an argument.

    Callback Function Parameters:
        The forEach method automatically calls the callback function for each element in the array.
        The first parameter of this callback function will be the current element in the array during that particular iteration.


    One Required Parameter: The callback function that you pass to forEach is expected to have at least one parameter. 
    This first parameter will automatically receive the current element in the array.
*/