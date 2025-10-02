console.log("Javascript Initalized Successfully");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Invalid choice! Please select rock, paper, or scissors.";
    }
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

function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        document.getElementById("player-choice").innerText = "Your Choice: " + playerSelection;
        document.getElementById("computer-choice").innerText = "Computer's Choice: " + computerSelection;

        if (result.startsWith("You win")) {
            playerScore++;
            document.getElementById("player-score").innerText = "Your Score: " + playerScore;
        } else if (result.startsWith("You lose")) {
            computerScore++;
            document.getElementById("computer-score").innerText = "Computer's Score: " + computerScore;
        }
    }

    document.getElementById("result-message").innerText = `Final Score - You: ${playerScore}, Computer: ${computerScore}`; 
    if (playerScore > computerScore) {
        document.getElementById("result-message").innerText = "Congratulations! You are the overall winner!";
    } else if (computerScore > playerScore) {
        document.getElementById("result-message").innerText = "Sorry, the computer wins overall!";
    } else {
        document.getElementById("result-message").innerText = "It's an overall tie!";
    }
}