
let score = { player: 0, computer: 0, ties: 0 };

function play() {
  const moves = document.getElementsByName("move");
  let playerMove;

  // Find the move that the player selected
  for (let i = 0; i < moves.length; i++) {
    if (moves[i].checked) {
      playerMove = moves[i].value;
      break;
    }
  }

  // Generate a random move for the computer
  const computerMove = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

  // Determine the winner
  let result;
  if (playerMove === computerMove) {
    result = "It's a tie!";
    score.ties++;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
    score.player++;
  } else {
    result = "You lose!";
    score.computer++;
  }

  
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

  
  // Display the result and score
  const resultElement = document.getElementById("result");
  resultElement.textContent = `You played ${playerMove}, the computer played ${computerMove}. ${result}`;
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Player: ${score.player}, Computer: ${score.computer}, Ties: ${score.ties}`;
}
