





//document.getElementById("word").textContent = word;

//var randInt = randomGenerator(0,array.length-1);
//var item = array[randInt];





// bot generate a random result - rock paper sisscor



//compare result
function game(){


let question = prompt("enter rock, paper, or scissors");
input = question;




//if input is paper while the bot say paper then output: try again
//if input is paper while the bot say rock then output you win --score +1
//if input is paper while the bot say sisscor then output you lost -- bot score +1

choices = ["rock", "paper", "scissors"]; //this is an array that stores rock paper and scissors

var word = choices[Math.floor(Math.random() * choices.length)];
console.log("the bot has entered "+ word);
console.log("you have entered "+ question);



let x = 0;
while(x < choices.length)
{// logging generated options - console.log(choices[x]);
   // loop through bot choices
   //starting when x=0

   // logistics is that one random generated choices have 3 probabilities
   // it will be either bot win, human win, draw

   var player = 0;
   var bot = 0;


        if (choices[x] == input && word == choices[x+1]) //if input is a rock and the word generated is a paper
        { // input = rock
           //choices = paper

           //input = paper
           //choices = sicssor


           // that is the scenario when bot win
           console.log("bot win this round and "+ "bot score is: " + bot+1);
            
            
        }
        else if (choices[x] == input && word == choices[x-2]) //if input is a rock and the word generated is a scissor
        { //input = sicssor
           //word = rock
           // that is the scenario when bot also win
           console.log("bot win this round --- "+ "bot score is: " + bot++);
            
            
        }

        x++;

}

if(word == input){ //when you enter not the same thing as the bot 2 other things
    console.log("you have entered --- " + question + " the same as the bot");
    console.log('click start game for another round');
    }

else{ //this is when you and the bot use the same thing
    console.log('click start game for another round');
}

}
/*else if (question !== "paper"){
    //run the random generator bot say paper then it is either a loss or win

  


}*/






//win or loss









/*function myalert(){
    alert("enter either rock paper or sissor");
}*/