console.log("Javascript Initalized Successfully");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter rock, paper, or scissors:");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > playerScore) {
        console.log("Sorry! The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}