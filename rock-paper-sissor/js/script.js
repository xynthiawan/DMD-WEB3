let userWins = 0;
let computerWins = 0;
//Here I have added two variables userWins and computerWins 
//initialized with 0 to keep the track of wins. 


function pickWinner(userPlay, computerPlay) {
  // check for valid input
  if (!["rock", "paper", "scissors"].includes(userPlay)) {
    console.error("Invalid user play. Please enter 'rock', 'paper', or 'scissors'.");
    return;
  }
  if (!["rock", "paper", "scissors"].includes(computerPlay)) {
    console.error("Invalid computer play. Please enter 'rock', 'paper', or 'scissors'.");
    return;
  }

  // check for a tie
  if (userPlay === computerPlay) {
    console.log("It's a tie!");
    return;
  }

  // check for a win
  switch (userPlay) {
    case "rock":
      if (computerPlay === "scissors") {
        console.log("You win!");
        userWins++;
      } else {
        console.log("You lose!");
        computerWins++; //increase count of wins for computers
      }
      break;
    case "paper":
      if (computerPlay === "rock") {
        console.log("You win!");
        userWins++;
      } else {
        console.log("You lose!");
        computerWins++;//increase count of wins for players
      }
      break;
    case "scissors":
      if (computerPlay === "paper") {
        console.log("You win!");
        userWins++;
      } else {
        console.log("You lose!");
        computerWins++;
      }
      break;
  }
}

while (true) {
  let userPlay = prompt("Enter rock, paper, or scissors:");
  let computerPlay = Math.random() < 0.33 ? "rock" : Math.random() < 0.66 ? "paper" : "scissors";
  console.log("You played " + userPlay + " and the computer played " + computerPlay + ".");
  pickWinner(userPlay, computerPlay);
  console.log("User wins: " + userWins + " Computer wins: " + computerWins);
}

  