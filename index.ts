import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

let secretNumber: number;
let attempts: number = 0;

function startNewGame() {
  secretNumber = generateRandomNumber();
  console.log(secretNumber);
  
  attempts = 0;
  console.log("Welcome to the Number Guessing Game!");
  console.log("I've selected a random number between 1 and 100. Try to guess it.");
  askForGuess();
}

function askForGuess() {
  rl.question("Enter your guess: ", (input: string) => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      askForGuess();
    } else {
      attempts++;

      if (guess === secretNumber) {
        console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.question("Do you want to play again? (yes/no): ", (playAgain: string) => {
          if (playAgain.toLowerCase() === 'yes') {
            startNewGame();
          } else {
            rl.close();
          }
        });
      } else if (guess < secretNumber) {
        console.log("Try a higher number.");
        askForGuess();
      } else {
        console.log("Try a lower number.");
        askForGuess();
      }
    }
  });
}

startNewGame();
