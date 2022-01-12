// Edits game.html and generator.html
// Author: Jack Lynn

// fizzBuzz: converts a given digit to its respective FizzBuzz value
// Inputs:  num - int - the number to be converted
//          fizz - int - given Fizz number, usually 3
//          buzz - int - given Buzz number, usually 5
// Outputs: returnStr - string - corresponding FizzBuzz number
//          - "Fizz" if divisible by Fizz number
//          - "Buzz" if divisible by Buzz number
//          - "FizzBuzz" if divisible by Fizz and Buzz numbers
//          - Otherwise number as a string
//          - Will throw errors for negative and non-string numbers
function fizzBuzz(num, fizz, buzz) {

    // Check to make sure number is not negative
    if (num < 0) {
        throw new RangeError("Test numbers cannot be negative!");
    }

    // Check to make sure Fizz and Buzz numbers are not 0 or negative
    if (fizz < 1 || buzz < 1) {
        throw new RangeError("Fizz and Buzz numbers cannot be negative or 0!");
    }

    // Check to make sure input is an integer
    if (!(Number.isInteger(num))) {
        throw new TypeError("Input number should be an integer!");
    }

    // Check to make sure Fizz and Buzz numbers are integers
    if (!(Number.isInteger(fizz)) || !(Number.isInteger(buzz))) {
        throw new TypeError("Fizz and Buzz numbers should be integers!");
    }

    returnStr = "";

    // Check if divisible by Fizz number
    if (num % fizz === 0) {
        returnStr += "Fizz";
    }

    // Check if divisible by Buzz number
    if (num % buzz === 0) {
        returnStr += "Buzz";
    }

    // If neither Fizz nor Buzz, return number
    if (returnStr === "") {
        returnStr = num.toString();
    }

    return returnStr;
}

// Export function for unit test
module.exports = fizzBuzz;