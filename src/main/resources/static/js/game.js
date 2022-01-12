// Edits game.html
// Author: Jack Lynn

// Hidden variable that keeps current track of where the player is
let currVal = 1;
let score = 0;

// checkRound: check of the current round upon button click (corresponds to specific HTML elements)
//   Inputs:  choice - string - button choice being made by user, such as "Fizz", "Buzz", "FizzBuzz", or "Num"
function checkRound(choice) {

    // Special case: when the current guess is an integer, the value must be taken from the page
    if (choice !== "Fizz" && choice !== "Buzz" && choice !== "FizzBuzz") {
        choice = document.getElementById("num").innerHTML;
    }

    // Check to see if user made the right choice
    let correct = fizzBuzz(currVal, 3, 5);
    if (correct === choice) { // Correct choice made

        // Update currVal
        currVal++;

        // Set button to new currVal
        document.getElementById("num").innerHTML = currVal;

        // Debugging logging
        console.log("Correct choice made");

        // Update score: 10 for num, 50 for Fizz or Buzz, and 100 for FizzBuzz
        if (correct === "Fizz" || correct === "Buzz") {
            score += 50;
        } else if (correct === "FizzBuzz") {
            score += 100;
        } else {
            score += 10;
        }
        document.getElementById("score").innerHTML = "Score: " + score;

    } else { // Incorrect choice made

        // Debugging logging
        console.log("Incorrect choice made");

        // Inactivate play buttons
        document.getElementById("fizz").disabled = true;
        document.getElementById("buzz").disabled = true;
        document.getElementById("fizzbuzz").disabled = true;
        document.getElementById("num").disabled = true;

        // Activate restart button
        document.getElementById("restart").disabled = false;
    }

}

// restart: starts the game back up again after finishing previous round
function restart() {

    // Reset currVal
    currVal = 1;

    // Reset number button
    document.getElementById("num").innerHTML = 1;

    // Reset score
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;

    // Enable play buttons
    document.getElementById("fizz").disabled = false;
    document.getElementById("buzz").disabled = false;
    document.getElementById("fizzbuzz").disabled = false;
    document.getElementById("num").disabled = false;

    // Disable restart button
    document.getElementById("restart").disabled = true;
}