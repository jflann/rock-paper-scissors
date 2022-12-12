function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  switch (getRandomInt(0,2)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function referee() {
  let training = {};
  function learn(winner, loser) {
    if (!training[winner]) training[winner] = loser;
  }
  function judge(choiceOne, choiceTwo) {
    // returns winner as 'choiceOne' or 'choiceTwo', or returns 'tie'
    if (choiceOne === choiceTwo) return 'tie';
    return (training[choiceOne] === choiceTwo ? 'choiceOne' : 'choiceTwo');
  }
  function validate(choice) {
    return choice in training;
  }
  function choices() {
    return Object.keys(training);
  }
  return {
    'learn': learn,
    'playRound': judge,
    'validAction': validate,
    'getChoices': choices
  }
}

let playerScore = 0;
let computerScore = 0;
let gameState = 'start';
let gameMessage = 'Make your selection!';

let ref = referee();
ref.learn('rock', 'scissors');
ref.learn('paper', 'rock');
ref.learn('scissors', 'paper');

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

resetGame();

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  // clear score bars
  const scoreBars = document.querySelectorAll('.score-bar');
  scoreBars.forEach(div => div.replaceChildren());

  const choiceButtons = document.querySelectorAll(".game-button");
  choiceButtons.forEach(btn => btn.addEventListener("click", choose));

  updateGameMessage("Ready to play!");
}

function endGame() {
  const choiceButtons = document.querySelectorAll(".game-button");
  choiceButtons.forEach(btn => btn.removeEventListener("click", choose));
}

function choose() {
  switch (ref.playRound(this.id, getComputerChoice())) {
    case 'choiceOne':
      handleRound('playerWin');
      return
    case 'choiceTwo':
      handleRound('computerWin');
      return
    case 'tie':
      handleRound('tie')
      return
  }
}

function handleRound(outcome) {
  if (outcome === 'tie') {
    updateGameMessage("Round tie! Choose again.")
  }
  if (outcome === 'playerWin') {
    incrementScore('player');
    updateGameMessage("You win a point! Choose again.")
  }
  if (outcome === 'computerWin') {
    incrementScore('computer');
    updateGameMessage("Computer wins a point! Choose again.")
  }

  if (playerScore === 5) {
    updateGameMessage("You win the game! Click below to play again!");
    endGame();
  }
  if (computerScore === 5) {
    updateGameMessage("Computer wins the game! Click below to play again!");
    endGame();
  }
}

function incrementScore(player) {
  if (player === 'player') {
    barId = 'player-score-bar';
    playerScore++;
  }
  if (player === 'computer') {
    barId = 'computer-score-bar';
    computerScore++;
  }

  const scoreBar = document.querySelector(`#${barId}`);
  const point = document.createElement('div');
  point.classList.add('point');
  scoreBar.appendChild(point);
}

function updateGameMessage(message) {
  let element = document.getElementById('game-message');
  element.textContent = message;
}

