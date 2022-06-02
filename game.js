const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        playRound(button.id, computerSelection);   
        });
    });


const playerSelection = ""; 
const computerSelection = computerPlay();


    function computerPlay(){//Computer picks randomly Rock, Paper or Scissors   
        return choices[Math.floor(Math.random() * choices.length)];    
    }

//Setting values for player's and computer's score to 0
let userScore = 0;
let pcScore = 0;


    function playRound(playerSelection, computerSelection){// Decides the winner of a single round and adds 1 point
            
        playerSelection = playerSelection.toUpperCase(); //players Choice/input is case insensitive
        computerSelection = computerPlay().toUpperCase();
 
    if (pcScore < 5 && userScore < 5){

        if (computerSelection == "PAPER" && playerSelection == "ROCK"){
            pcScore++;        
                    
        } else if(computerSelection == "SCISSORS" && playerSelection == "ROCK"){
        userScore++;
            
        } else if (computerSelection == "ROCK" && playerSelection == "PAPER"){
            userScore++; 
            
        } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        pcScore++;
            
        } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS"){
            pcScore++; 
            
        } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS"){
            userScore++;
            
        } else if (computerSelection == playerSelection){    
        
        } 
          computer.textContent = pcScore;
          player.textContent = userScore;
          results.textContent = "You chose:" + " " +  playerSelection  + "\nComputer chose:" + " " + computerSelection;
                 
        
    } if (pcScore == 5){
        winner.textContent = "Computer WINS!!!"
    
    } else if (userScore == 5){
        winner.textContent = "Player WINS!!!"
    }
}


const computer = document.querySelector('.computer');
computer.textContent = pcScore;
                
const player = document.querySelector('.player');
player.textContent = userScore;

const results = document.querySelector('.results');
results.textContent = "Your choice:" + "\nComputer's choice:";

const winner = document.querySelector('.winner');
    

 
   