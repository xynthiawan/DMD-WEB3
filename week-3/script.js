
let playerScore = 0;
let computerScore = 0;
let userPlay = " ";
let computerPlay = " ";
let choices;
let length;
let randomFirstName ="";
let randomIndex =''; 

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

fetch("https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json")
.then(response => response.json())
.then(data => {

    console.log(data);
    let { contacts } = data;

    contacts.forEach(contact =>{ 
    // for each objects or each position allow the console return the name to check validity
        //console.log (contact.firstname);
      length= data.contacts.length;
      randomIndex = Math.floor(Math.random() * length);
      randomFirstName= contacts[randomIndex].firstname;
      console.log(randomFirstName);
    }); 

    contacts = contacts.map(contact => new Person (

        contact.firstname,

    ));
    
  displayDirectory(contacts);
  // contacts means the array object name so I want to display it

})
.catch(error => console.error(error));



  class Person {
    constructor(firstname) {
      
      this.firstname = firstname;
   
    }
  }

  
  const displayDirectory = data => {

    data.forEach(contacts => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>the randomized opponent is ${randomFirstName}</td>
      `;
      directory.appendChild(tr);
      // Select a random index from the "contacts" array

    });
  };



// Get the first name from the selected contact


// Display the random first name on the page
      
document.getElementById("opponent-name").innerHTML = randomFirstName;