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
        returnStr = num;
    }

    return returnStr;
}