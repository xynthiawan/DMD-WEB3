let computerWins = 0;
let userWins = 0;
function pickWinner(userPlay, computerPlay) {
  // Check if userPlay is a valid move

  if (userPlay !== "rock" && userPlay !== "paper" && userPlay !== "scissors") {
    console.log("Invalid user play. Please enter 'rock', 'paper', or 'scissors'.");
    return;
  }
  // Check if computerPlay is a valid move
  if (computerPlay !== "rock" && computerPlay !== "paper" && computerPlay !== "scissors") {
    console.log("Invalid computer play. Please enter 'rock', 'paper', or 'scissors'.");
    return;
  }
  // Check for tie
  if (userPlay === computerPlay) {
    console.log("It's a tie!");
    return;
  }
  // Check for user win
  switch (userPlay) {
    case "rock":
      if (computerPlay === "scissors") {
        userWins++;
        console.log(`You win! Your score is ${userWins}`);//template literals, you need to use backticks (`)
      } else {
        computerWins++;
        console.log(`You lose! Computer score is ${computerWins}`);
      }
      break;
    case "paper":
      if (computerPlay === "rock") {
        userWins++;
        console.log(`You win! Your score is ${userWins}`);//template literals, you need to use backticks (`)
      } else {
        computerWins++;
        console.log(`You lose! Computer score is ${computerWins}`);
      }
      break;
    case "scissors":
      if (computerPlay === "paper") {
        userWins++;
        console.log(`You win! Your score is ${userWins}`);//template literals, you need to use backticks (`)
      } else {
        computerWins++;
        console.log(`You lose! Computer score is ${computerWins}`);
      }
  }
}

let userPlay = prompt("Enter rock, paper, or scissors:");
let computerPlay = Math.random() < 0.33 ? "rock" : Math.random() < 0.66 ? "paper" : "scissors";
console.log("You played " + userPlay + " and the computer played " + computerPlay + ".");
pickWinner(userPlay, computerPlay);
