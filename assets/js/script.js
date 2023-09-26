// Waits for the DOM to be finished loading
document.addEventListener ("DOMContentLoaded", function() {
});

// Interchangable sections
const menuSection = document.getElementById("menu-section");
const gameSection = document.getElementById("game-section");
const informationSection = document.getElementById("information-section");
const imageSection = document.getElementById("image-section");
const textSection = document.getElementById("text-section");
const gameResultSection = document.getElementById("game-result");
let winScore = document.getElementById("win-score");
let drawScore = document.getElementById("draw-score");
let loseScore = document.getElementById("lose-score");

// Game Stats
let playerWinScore = 0;
let playerDrawScore = 0;
let playerLoseScore = 0;

// Buttons
const startGameButton = document.getElementById("start-game");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

// Event Listeners
startGameButton.addEventListener("click", startGame);
rockButton.addEventListener("click", handleChoice);
paperButton.addEventListener("click", handleChoice);
scissorsButton.addEventListener("click", handleChoice);

const imageList = [
    {
        choice: "rock",
        source: "assets/images/rock.png",
        alt: "Image depicting a rock sign",
        class: "image"
    },
    {
        choice: "paper",
        source: "assets/images/paper.png",
        alt: "Image depicting a paper sign",
        class: "image"
    },
    {
        choice: "scissors",
        source: "assets/images/scissors.png",
        alt: "Image depicting a scissors sign",
        class: "image"
    },
];

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

function clearImage() {
    const imageElements = informationSection.querySelectorAll('img');
    imageElements.forEach((img) => {
        img.remove();
    });
}

function displayImage(choice) {
    // Remove the 'let' keyword here
    let imageListItem = imageList.find((item) => item.choice === choice);
    if (imageListItem) {
        let imageDisplayed = document.createElement("img");
        imageDisplayed.src = imageListItem.source;
        imageDisplayed.alt = imageListItem.alt;
        imageDisplayed.classList.add(imageListItem.class);

        imageSection.appendChild(imageDisplayed);
    }
}

function handleChoice(event) {
    clearImage();
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
            computerChoice = "scissors";
            break;
    }

    displayImage(playerChoiceValue);
    displayImage(computerChoice);

    let result;
    let gameResultMessage;
    
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

    if (playerChoiceValue === computerChoice) {
        result = "draw";
        gameResultMessage = "It's a draw!";
    } else if (
        (playerChoiceValue === "rock" && computerChoice === "scissors") ||
        (playerChoiceValue === "paper" && computerChoice === "rock") ||
        (playerChoiceValue === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
        gameResultMessage = "You win!";
    } else {
        result = "lose";
        gameResultMessage = "You lose!";
    }

    gameResultSection.textContent = gameResultMessage;

    update_score();
}