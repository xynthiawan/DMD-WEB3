
let playerScore = 0;
let computerScore = 0;
let userPlay = " ";
let computerPlay = " ";
let choices;


function pickWinner(userPlay, computerPlay) {
    // Check if userPlay is valid
   userPlay= prompt("Enter 'rock', 'paper', 'scissors'");
   choices = ["rock", "paper", "scissors"];
   computerPlay = choices[Math.floor(Math.random() * 3)];
   // generate a radom number between 0 and 3
   //turnary function looking at fractions use whole number
    if (userPlay !== "rock" && userPlay !== "paper" && userPlay !== "scissors" && userPlay !== "score") {
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
        case "score":
            if (userPlay.toLowerCase()=== "score") {
                console.log(`Thank you for playing! Your score vs computer is ${playerScore} vs ${computerScore}`);
                //score
                }
            //console.log("Thank you for playing! Your score is: " + playerScore + ":" + computerScore);
            break;
            
    }

    console.log(`Your score vs computer is ${playerScore} vs ${computerScore}`);
    
    
}

// Play the game

// provide prompt