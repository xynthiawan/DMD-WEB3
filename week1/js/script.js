/*let computerWins = 0;
let userWins = 0;

function pickWinner(input, computerPlay) {
  // Check if userPlay is a valid move
  input = prompt("Enter rock, paper, or scissors:");
  let userPlay = input;
  
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
  let confirmed = confirm("Do you want to play again?");
  while (confirm !== true){
    prompt("Enter rock, paper, or scissors:");
  }
  }
}

let computerPlay = Math.random() < 0.33 ? "rock" : Math.random() < 0.66 ? "paper" : "scissors";
console.log("You played " + userPlay + " and the computer played " + computerPlay + ".");
pickWinner(userPlay, computerPlay);
*/

let playerScore = 0;
let computerScore = 0;

function pickWinner(userPlay, computerPlay) {
    // Check if userPlay is valid
    if (userPlay !== "rock" && userPlay !== "paper" && userPlay !== "scissors" && userPlay !== "quit") {
        console.log("Invalid user play. Please enter 'rock', 'paper', or 'scissors'.");
        return;
    }
    // Check if computerPlay is valid
    if (computerPlay !== "rock" && computerPlay !== "paper" && computerPlay !== "scissors") {
        console.log("Invalid computer play. Please enter 'rock', 'paper', or 'scissors'.");
        return;
    }

    // Check for winning conditions
    switch(userPlay) {
        case "rock":
            if (computerPlay === "scissors") {
                console.log("You win! Rock beats scissors.");
                playerScore++;
            } else if (computerPlay === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else if (computerPlay === userPlay) {
                console.log("It's a tie! You both chose rock.");
            }
            break;
        case "paper":
            if (computerPlay === "rock") {
                console.log("You win! Paper beats rock.");
                playerScore++;
            } else if (computerPlay === "scissors") {
                console.log("You lose! Scissors beat paper.");
                computerScore++;
            } else if (computerPlay === userPlay) {
                console.log("It's a tie! You both chose paper.");
            }
            break;
        case "scissors":
            if (computerPlay === "paper") {
                console.log("You win! Scissors beat paper.");
                playerScore++;
            } else if (computerPlay === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            } else if (computerPlay === userPlay) {
                console.log("It's a tie! You both chose scissors.");
            }
            break;
        case "quit":
            console.log("Thank you for playing! Your score is: " + playerScore + ":" + computerScore);
            break;
    }
}

// Play the game
while (true) {
    console.log("Your score is: " + playerScore + ":" + computerScore);
    let userPlay=prompt("Enter 'rock', 'paper', 'scissors' or 'quit' to exit:");
    if (userPlay.toLowerCase() === "quit") {
        console.log("Thank you for playing! Your score is: " + playerScore + ":" + computerScore);
        break;
    }
    let computerPlay = Math.random() < 0.5 ? "rock" : Math.random() < 0.75 ? "paper" : "scissors";
    pickWinner(userPlay, computerPlay);
}
