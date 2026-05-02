// Function to run the game
function startGame() {
    // 1. Generate the secret number
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let won = false;

    // Log for testing/evidence
    console.log("Secret Number is: " + secretNumber);

    // 2. Loop for 3 attempts
    for (let i = 1; i <= 3; i++) {
        let input = prompt("Attempt " + i + "/3: Guess a number between 1 and 10");

        // --- Enhancement: Input Validation ---
        let guess = Number(input);
        if (input === null) return; // Exit if user clicks 'Cancel'

        if (isNaN(guess) || input.trim() === "") {
            alert("Error: Please enter a valid number.");
            i--; // Don't count this as an attempt
            continue;
        }

        // 3. Comparison Logic
        if (guess === secretNumber) {
            alert("Congratulations! Bingo!");
            won = true;
            break; // Exit loop immediately on win
        } else if (guess > secretNumber) {
            alert("Too high!");
        } else {
            alert("Too low!");
        }
    }

    // 4. Reveal result if lost
    if (!won) {
        alert("Game Over! You've lost. The secret number was " + secretNumber);
    }

    // --- Enhancement: Play Again ---
    let playAgain = confirm("Would you like to play again?");
    if (playAgain) {
        startGame(); // Restart the function
    }
}

// Kick off the game for the first time
startGame();