function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let choice;
  switch (getRandomInt(0,2)) {
    case 0:
      choice = 'rock';
      break
    case 1:
      choice = 'paper';
      break
    case 2:
      choice = 'scissors';
      break
  }
  return choice;
}

function getPlayerChoice() {
  let choice = {
    value: null,
    valid: false
  }
  while (choice.valid == false) {
    choice.value = prompt('Rock, paper, or scissors?');
    if (['rock', 'paper', 'scissors'].includes(choice.value.toLowerCase())) {
      choice.valid = true;
    }
  }
  return choice.value;
}

function playRound(playerChoice, computerChoice) {

  playerChoice = playerChoice.toLowerCase();
  
  // determine result
  let result;
  switch (playerChoice + computerChoice) {
    // ties
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      result = 'tie';
      alert("It's a tie!");
      break

    // losses
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      result = 'lose';
      alert(`You lose! ${computerChoice} beats your ${playerChoice}.`);
      break
    
    // wins
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      result = 'win';
      alert(`You win! Your ${playerChoice} beats ${computerChoice}.`)
      break
  }

  return result;
}

function game(rounds = 5) {

  let playerWins = 0;
  let computerWins = 0;
  let roundTies = 0;

  // play rounds
  for(let i = 0; i < rounds; i++) {

    roundResult = playRound(getPlayerChoice(), getComputerChoice())

    switch (roundResult) {
      case 'win':
        playerWins++;
        break
      case 'lose':
        computerWins++;
        break
      case 'tie':
        roundTies++;
    }
  }

  // get game result
  let gameResult;
  if (playerWins > computerWins) {
    gameResult = `Player wins! ${playerWins} : ${computerWins}`;
  }
  else if (playerWins < computerWins) {
    gameResult = `Computer wins! ${playerWins} : ${computerWins}`;
  }
  else if (playerWins == computerWins) {
    gameResult = `It's a tie! ${playerWins} : ${computerWins}`;
  }

  alert(gameResult);
  return gameResult
  
}