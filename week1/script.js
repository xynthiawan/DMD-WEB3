
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

        //case " ";
        //if 
        //else if
        //break;

        //case#2
        //if 
        //else if
        //break;
        
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
// provide prompt