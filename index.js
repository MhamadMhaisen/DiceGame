let player1Name;
let player2Name;

function getPlayer1Name() {
    event.preventDefault();
    player1Name = document.getElementById("p1name").value;
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "block";
}

function getPlayer2Name() {
    event.preventDefault();
    player2Name = document.getElementById("p2name").value;
    let player1Roll = Math.floor(Math.random() * 6) + 1;
    let player2Roll = Math.floor(Math.random() * 6) + 1;
    let resultText;
    if (player1Roll > player2Roll) {
        resultText = `${player1Name} wins with a roll of ${player1Roll}. ${player2Name} rolled a ${player2Roll}.`;
    } else if (player2Roll > player1Roll) {
        resultText = `${player2Name} wins with a roll of ${player2Roll}. ${player1Name} rolled a ${player1Roll}.`;
    } else {
        resultText = `${player1Name} and ${player2Name} both rolled a ${player1Roll}. It's a tie!`;
    }
    document.getElementById("player2").style.display = "none";
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result").style.display = "block";
    document.getElementById("play-again").style.display = "block";
}

function playAgain() {
    let player1Input = document.getElementById("p1name");
    let player2Input = document.getElementById("p2name");
    player1Input.value = "";
    player2Input.value = "";
    player1Name = null;
    player2Name = null;
    document.getElementById("player1").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("play-again").style.display = "none";
}
