// Interchangable sections
const menuSection = document.getElementById("menu-section");
const gameSection = document.getElementById("game-section");
let winScore = document.getElementById("win-score")
let drawScore = document.getElementById("draw-score")
let loseScore = document.getElementById("lose-score")

// Game Stats
let playerChoice;
let computerChoice;
let playerWinScore = 0;
let playerDrawScore = 0;
let playerLoseScore = 0;

// Buttons
const startGameButton = document.getElementById("start-game")
const rockButton = document.getElementById("rock-button")
const paperButton = document.getElementById("paper-button")
const scissorsButton = document.getElementById("scissors-button")

// Event Listeners
startGameButton.addEventListener("click", startGame);
rockButton.addEventListener("click", handleChoice)
paperButton.addEventListener("click", handleChoice)
scissorsButton.addEventListener("click", handleChoice)

// Functions
function startGame(event) {
    // Closes the menu and opens the game section
    menuSection.style.display = "none";
    gameSection.style.display = "flex";

    playerWinScore = 0;
    playerDrawScore = 0;
    playerLoseScore = 0;
}

function update_score() {
    winScore.textContent = playerWinScore;
    drawScore.textContent = playerDrawScore;
    loseScore.textContent = playerLoseScore;
}

function handleChoice(event) {
    let playerChoiceValue = event.target.value;
    let computerChoiceValue = Math.floor(Math.random() * 3) + 1;
    
    let computerChoice;
    switch(computerChoiceValue) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }

    let result;
    
    if (playerChoiceValue === computerChoice) {
        result = "draw";
    } else if (
        (playerChoiceValue === "rock" && computerChoice === "scissors") ||
        (playerChoiceValue === "paper" && computerChoice === "rock") ||
        (playerChoiceValue === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
    } else {
        result = "lose";
    }

    if (result === "draw") {
        playerDrawScore++;
    } else if (result === "win") {
        playerWinScore++;
    } else {
        playerLoseScore++;
    }

    update_score();
}