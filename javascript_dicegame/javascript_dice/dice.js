const form = document.getElementById("player-form");
const game = document.getElementById("game");

const nameDisplay = document.getElementById("name");
const totalScoreDisplay = document.getElementById("totalScore");
const roundScoreDisplay = document.getElementById("roundScore");
const roundDisplay = document.getElementById("rounds");
const diceDisplay = document.getElementById("dice");
const message = document.getElementById("message");

// Lägg till referens till roundsDisplay här
const roundsDisplay = document.getElementById("rounds");

let playerName = "";
let totalScore = 0;
let roundScore = 0;
let rounds = 0;

form.addEventListener("submit", function (e){
    e.preventDefault();
    playerName = document.getElementById("playerName").value;
    nameDisplay.textContent = playerName;
    form.classList.add("hidden");
    game.classList.remove("hidden");
});

document.getElementById("roll").addEventListener("click", function (){
    if (totalScore >= 100) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    diceDisplay.textContent = roll;

    if (roll === 1){
        roundScore = 0;
        roundScoreDisplay.textContent = roundScore;
        rounds++;
        roundDisplay.textContent = rounds;
    }else{
        roundScore += roll;
        roundScoreDisplay.textContent = roundScore;
    }
});

document.getElementById("hold").addEventListener("click", function (){
    if (totalScore >= 100) return;

    totalScore += roundScore;
    roundScore = 0;
    rounds++;
    totalScoreDisplay.textContent = totalScore;
    roundScoreDisplay.textContent = roundScore;
    roundsDisplay.textContent = rounds; // Uppdatera antalet omgångar här

    if (totalScore >= 100) {
        message.textContent = `🎉 Grattis ${playerName}, du vann på ${rounds} omgångar!`;
    }
});
