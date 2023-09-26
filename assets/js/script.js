// Interchangable sections
const menuSection = document.getElementById("menu-section");
const gameSection = document.getElementById("game-section")

// Buttons
const startGameButton = document.getElementById("start-game")

// Event Listeners
startGameButton.addEventListener("click", startGame);

// Functions
function startGame(event) {
    // Closes the menu and opens the game section
    menuSection.style.display = "none";
    gameSection.style.display = "flex";
}