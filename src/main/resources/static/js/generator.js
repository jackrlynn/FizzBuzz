// Edits generator.html
// Author: Jack Lynn

// getInput: extracts the inputs (but does not validate yet) from the corresponding HTML page
//   Inputs:  all inputs are extracted from page, including string inputs for start, stop, Fizz, and Buzz numbers
//   Outputs: an 4-long array in the following order: [start, stop, fizz, buzz]
function getInput() {

    // Extract all numbers from document
    let start = parseInt(document.getElementById("start").value);
    let stop = parseInt(document.getElementById("stop").value);
    let fizz = parseInt(document.getElementById("fizz").value);
    let buzz = parseInt(document.getElementById("buzz").value);

    // Logging for debugging
    console.log("Input values:");
    console.log("Start: "+start);
    console.log("Stop:  "+stop);
    console.log("Fizz:  "+fizz);
    console.log("Buzz:  "+buzz);

    // Fixes any editing to boxes caused by erroneous previous input
    document.getElementById("start").style = "";
    document.getElementById("stop").style = "";
    document.getElementById("fizz").style = "";
    document.getElementById("buzz").style = "";

    // Convert into returnable array
    return [start, stop, fizz, buzz];
}

// validateNumber: check to see if the input is valid (greater than min value and not NaN)
//   Inputs:  val - int - the number being validated
//            min - int - the minimum value allowed
//   Outputs: true if a valid input; false if it breaks some rule
function validateNumber(val, min) {
    if (val >= min && !isNaN(val)) {
        return true;
    }
    return false;
}

// generate: generate the comma separated list of FizzBuzz values, including checks for proper parameters
//  Inputs:  start, stop, Fizz, and Buzz values extracted from number entry boxes on HTML page
//  Outputs: comma-delimited list of FizzBuzz values displayed on HTML page
function generate() {

    // Get input values
    let input = getInput();

    // Validate each value is a number that greater than 0 or 1 (depending on if the FizzBuzz value)
    let valid = [false, false, false, false, false]
    console.log("Validating inputs:");

    for (let i = 0; i < 4; i++) {
        if (i < 2) {
            valid[i] = validateNumber(input[i], 0);
        } else {
            valid[i] = validateNumber(input[i], 1);
        }

        // Debugging logging
        console.log("Input "+i+": "+valid[i]);
    }

    // Make sure the start value is less than the end value
    if (input[0] < input[1]) {
        valid[4] = true;

        // Debugging logging
        console.log("Start is less than end: "+valid[4]);
    } else {
        console.log("Start is less than end: "+valid[4]);
    }

    // Run FizzBuzz if all values are valid; otherwise, throw an error
    if (valid[0] && valid[1] && valid[2] && valid[3] && valid[4]) {
        let fizzBuzzNums = ""; // String that holds a list of FizzBuzz values separated by commas

        // Iterate through each value and generate FizzBuzz value
        for (num = input[0]; num < input[1]+1; num++) {
            let currNum = fizzBuzz(num, input[2], input[3]);

            // Add values to FizzBuzz list
            fizzBuzzNums += currNum + ","

            // Debugging logging
            console.log(num+": "+currNum);
        }

        // Post FizzBuzz values to screen
        document.getElementById("output").innerHTML = fizzBuzzNums;

        // Debugging logging
        console.log("Final list: "+fizzBuzzNums);

    // Display an error message describing the validity of the user's input
    } else {
        let errMessage = "ERROR: The following issue(s) were found in your input:"; // Holds error message

        // Write error messages
        // Highlight in red problematic boxes
        if (!valid[0]) {
            errMessage += "\n - The start number must be an integer greater than or equal to 0";
            document.getElementById("start").style = "background: #FF9F9F";
        }
        if (!valid[1]) {
            errMessage += "\n - The stop number must be an integer greater than or equal to 0";
            document.getElementById("stop").style = "background: #FF9F9F";
        }
        if (!valid[2]) {
            errMessage += "\n - The Fizz number must be an integer greater than or equal to 1";
            document.getElementById("fizz").style = "background: #FF9F9F";
        }
        if (!valid[3]) {
            errMessage += "\n - The Buzz number must be an integer greater than or equal to 1";
            document.getElementById("buzz").style = "background: #FF9F9F";
        }
        if (!valid[4]) {
            errMessage += "\n - The start number must be less than the stop number";
            document.getElementById("start").style = "background: #FF9F9F";
            document.getElementById("stop").style = "background: #FF9F9F";
        }

        // Display error message to HTML page
        document.getElementById("output").innerHTML = errMessage;
    }
}

