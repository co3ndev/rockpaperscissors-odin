console.log("Javascript Initalized Successfully");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game(playerInput){
    let compChoice = getRandomInt(1, 3);
    const playerScore = 0;
    const compScore = 0;
    
    console.log(compChoice);
    if (playerInput === compChoice){
        document.getElementById("result").innerText = "Tie!";
    }
    if (playerInput === 1 && compChoice === 3 ||
        playerInput === 2 && compChoice == 1 ||
        playerInput === 3 && compChoice === 2){
            playerScore +1;
            document.getElementById("player-score").innerText = "Your score: {playerScore}";
            document.getElementById("result").innerText = "Player wins!"
        }
        else {
            compScore +1;
            document.getElementById("computer-score").innerText = "Computer score: {compScore}";
            document.getElementById("result").innerText = "Computer wins!";
        }
}