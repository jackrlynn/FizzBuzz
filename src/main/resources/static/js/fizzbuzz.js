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
function fizzBuzz(num, fizz, buzz) {
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
        returnStr = toString(num);
    }

    return returnStr;
}