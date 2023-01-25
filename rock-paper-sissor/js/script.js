





//document.getElementById("word").textContent = word;

//var randInt = randomGenerator(0,array.length-1);
//var item = array[randInt];





// bot generate a random result - rock paper sisscor



//compare result



let question = prompt("enter rock, paper, or scissors");
input = question;




//if input is paper while the bot say paper then output: try again
//if input is paper while the bot say rock then output you win --score +1
//if input is paper while the bot say sisscor then output you lost -- bot score +1

words = ["rock", "paper", "scissors"]; //this is an array that stores rock paper and scissors

var word = words[Math.floor(Math.random() * words.length)];
console.log("the bot has entered "+ word);

/*
let x = 0;
while(x < words.length)
{console.log(words(x));
    x++
}
*/
if(word !==input){ //when you enter not the same thing as the bot 2 other things
console.log("you have entered "+ question);

}
else if (words[0] == input && word == words[1]) //if input is a rock and the word generated is a paper
{ //input = rock
   //word = paper
   // that is the scenario when bot win
   console.log("you have entered "+ question);
   console.log("bot + 1");
    
    
}
else if (words[0] == input && word == words[2]) //if input is a rock and the word generated is a scissor
{ //input = rock
   //word = scissor
   // that is the scenario when you win
   console.log("you have entered "+ question);
   console.log("Human + 1");
    
    
}
else{ //this is when you and the bot use the same thing
    console.log("you used the same thing as the bot ");
    console.log('try again');
}


/*else if (question !== "paper"){
    //run the random generator bot say paper then it is either a loss or win

  


}*/






//win or loss









/*function myalert(){
    alert("enter either rock paper or sissor");
}*/