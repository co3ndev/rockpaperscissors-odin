console.log("Javascript Initalized Successfully");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let playerScore = 0;
let compScore = 0;

function game(playerInput){
    let compChoice = getRandomInt(1, 3);

    if (compScore === 5 || playerScore === 5){
        compScore = 0;
        playerScore = 0;
        document.getElementById("computer-score").innerText = "Computer score: " + compScore;
        document.getElementById("player-score").innerText = "Player score: " + playerScore;
    }

    console.log(compChoice);

    if (playerInput === compChoice){
        document.getElementById("result").innerText = "Tie!";
    } else if (playerInput === 1 && compChoice === 3 ||
        playerInput === 2 && compChoice == 1 ||
        playerInput === 3 && compChoice === 2){
            playerScore = playerScore +1;
            document.getElementById("player-score").innerText = "Your score: " + playerScore;
            document.getElementById("result").innerText = "Player wins!"
        }
        else {
            compScore = compScore +1;
            document.getElementById("computer-score").innerText = "Computer score: " + compScore;
            document.getElementById("result").innerText = "Computer wins!";
        }
    switch (compChoice){
        case 1:
            document.getElementById("computerplayed").innerText = "Computer played: Rock";
            break;
        case 2:
            document.getElementById("computerplayed").innerText = "Computer played: Paper";
            break;
        case 3:
            document.getElementById("computerplayed").innerText = "Computer played: Scissors";
            break;
    }
    if (compScore === 5){
        document.getElementById("computerplayed").innerText = "Computer wins overall!";
        document.getElementById("result").innerText = "Press any choice to play again."
    } else if (playerScore === 5){
        document.getElementById("computerplayed").innerText = "Computer wins overall!";
        document.getElementById("result").innerText = "Press any choice to play again.!"
    }
}