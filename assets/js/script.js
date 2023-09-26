// Interchangable sections
const menuSection = document.getElementById("menu-section");
const gameSection = document.getElementById("game-section")

// Game Stats
let playerChoice;
let computerChoice;
let drawScore;
let winScore;
let loseScore;

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
}