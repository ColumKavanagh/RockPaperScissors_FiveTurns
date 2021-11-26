document.getElementById("Rock").addEventListener("click", maybeGame); 
document.getElementById("Paper").addEventListener("click", maybeGame);
document.getElementById("Scissors").addEventListener("click", maybeGame);/*as the Computer Guess is randomly generated each time runGame() is called, 
the Computer Guess changes every time the player makes a guess by clicking on one of the images.*/
let playerPick;
let playerPicks = [];
let turn=0;
let result = "";
let displayResult = "";
let gameResults = [];
function maybeGame(){
    while(turn<6){ //using a WHILE LOOP to determine when the game is playable i.e. until the player wins or has taken 5 turns
        runGame(); //described below
        playerPicks.push(playerPick); //adding each round's playerPick to the playerPicks array
        if (result=="win"){
            displayResult ="won."
        }else if (result=="lose"){
            displayResult="lost."
        }else{displayResult="drew."}
        gameResults.push(displayResult); //adding each round's result to the gameResults array
        turn=turn+1;
        if((result=="win")||(turn==5)){ //if the player wins or they have had 5 turns, the game ends and their results are shown
            document.getElementById("gameOver").innerHTML="Game over! Your results were:";
            for(i=0;i<gameResults.length;i++){
                document.getElementById("gameResults").innerHTML+="<br>Round "+(i+1)+": You picked "+playerPicks[i]+" and you "+gameResults[i];
            }
            document.getElementById("restartGame").innerHTML="</br><button onclick='restartGame()'>Click here to restart the game!</button>";
            //document.getElementById("gameResults").scrollIntoView();
            turn=6;
            }
            return turn;
        }
}
function runGame(){
    document.getElementById("gameOver").innerHTML=""
    let randomNum = Math.floor(Math.random() * 3) + 1;//computer picks a number from 1 to 3
    let computerPick;
    if (randomNum==1){
        computerPick="Rock";
        }else if (randomNum==2){
            computerPick="Paper";
        }else if(randomNum==3){
            computerPick="Scissors";
            }
    if(playerPick==computerPick){ //draw
        result = "draw";
        document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
        }else if (playerPick=="Rock"){ //ROCK
            if(computerPick=="Paper"){ //paper
                result = "lose";
                document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                    }else{ //scissors
                        result = "win";
                        document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }else if(playerPick=="Paper"){ //PAPER
            if(computerPick=="Rock"){ //rock
                result = "win";
                document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                    }else{ //scissors
                        result = "lose";
                        document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }else if(playerPick=="Scissors"){ //SCISSORS
            if(computerPick=="Rock"){ //rock
                    result = "lose";
                    document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }else{ //paper
                    result = "win";
                    document.getElementById("result").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }
}
function restartGame(){
    window.location.reload();
}