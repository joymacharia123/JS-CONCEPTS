let player1Score = 0;
let player2Score = 0;

function playRound(player1Choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(player1Choice, player2Choice);

    displayResult(player1Choice, player2Choice, result);
    updateScore(result);
}

function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 'It\'s a tie!';
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        player1Score++;
        return 'Player 1 wins!';
    } else {
        player2Score++;
        return 'Player 2 wins!';
    }
}

function displayResult(player1Choice, player2Choice, result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
}

function updateScore(result) {
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Score: Player 1: ${player1Score}, Player 2: ${player2Score}`;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'Score: Player 1: 0, Player 2: 0';
}
