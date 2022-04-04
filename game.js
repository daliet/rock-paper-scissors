const choices = ["rock", "paper", "scissors"];

const playerSelection = " ";
const computerSelection = computerPlay();


    function userPlay(){// Asks input from user and checks if it's valid. 
        let input =  prompt("What do you choose? Rock, Paper or Scissors?");
        while ((input == null) || (input.toLowerCase() !=="rock" && input.toLowerCase() !=="scissors" && input.toLowerCase() !=="paper")) {
            input = prompt("Please choose Rock, Paper or Scissors")
        } return input;  
    } 


    function computerPlay(){//Computer picks randomly Rock, Paper or Scissors   
        return choices[Math.floor(Math.random() * choices.length)];    
    }

//Setting values for player's and computer's score to 0
let userScore = 0;
let pcScore = 0;

    function playRound(computerSelection, playerSelection){// Decides the winner of a single round and adds 1 point
            playerSelection = userPlay().toLowerCase(); //players Choice/input is case insensitive
            computerSelection = computerPlay();
            
            console.log("Computer chose:" + " " + computerSelection + "\nPlayer chose:" + " " + playerSelection);
        if (computerSelection == "paper" && playerSelection == "rock"){
            pcScore++;
            alert ("Computer won this round");
            return "Computer Wins! Paper beats Rock"; 
            
        } else if(computerSelection == "scissors" && playerSelection == "rock"){
            userScore++;
            alert("You won this round");
            return "Player Wins! Rock beats Scissors"; 
            
        } else if (computerSelection == "rock" && playerSelection == "paper"){
            userScore++;
            alert("You won this round");
            return "Player Wins! Paper beats Rock"; 
            
        } else if (computerSelection == "scissors" && playerSelection == "paper"){
            pcScore++;
            alert("Computer won this round")
            return "Computer Wins! Scissors beats Paper";
            
        } else if (computerSelection == "rock" && playerSelection == "scissors"){
            pcScore++;
            alert("Computer won this round");
            return "Computer Wins! Rock beats Scissors"; 
            
        } else if (computerSelection == "paper" && playerSelection == "scissors"){
            userScore++;
            alert("You won this round");
            return "Player Wins! Scissors beats Paper";
             
        } else if (computerSelection == playerSelection){
            alert("Tie");  
            return "It'a a Tie!";
        } 
    }


    function game(){//function repeats 5 times and returns the final Winner or Tie
        userScore = 0;
        pcScore = 0;
        for(let i = 1; i <= 5; i++){
            console.log("------------------------------");
            console.log("Round:" + i);
            console.log(playRound(computerSelection, playerSelection));
            console.log("Player:" + userScore);
            console.log("Computer:" + pcScore);   
        } if (userScore == pcScore) {
            console.log("!!!TIE!!!"), alert("TIE!!!" + " " + userScore + "-" + pcScore); 
        }
        else if (userScore > pcScore){
            console.log("!!!PLAYER WINS!!!"), alert("YOU WON!!!" + " " + userScore + "-" + pcScore); 
        }
        else if  (userScore < pcScore){
            console.log("!!!COMPUTER WINS!!!"), alert("YOU LOST!!!" + " " + pcScore + "-" + userScore); 
        }   
        document.querySelector('button').textContent = 'New Game';
    }