// Hidden variable that keeps current track of where the player is
let currVal = 1;

// Runs a check of the current round upon button click
//   choice: the choice the user made
function checkRound(choice) {

    // Special case: the choice is a number, so the choice needs to be updated
    if (choice !== "Fizz" && choice !== "Buzz" && choice !== "FizzBuzz") {
        choice = parseInt(document.getElementById("num").innerHTML);
    }

    // Check to see if user made the right choice
    let correct = fizzBuzz(currVal, 3, 5);
    if (correct === choice) {

        // Update currVal
        currVal++;

        // Set button to new currVal
        document.getElementById("num").innerHTML = currVal;

        // Debugging logging
        console.log("Correct choice made");

    } else { // Incorrect choice made

        // Reset currVal
        currVal = 1;

        // Reset number button
        document.getElementById("num").innerHTML = 1;

        // Debugging loggin
        console.log("Incorrect choice made");
    }

}