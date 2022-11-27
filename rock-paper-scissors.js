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

function playRound(playerChoice, computerChoice) {

  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  
  let result;
  switch (playerChoice + computerChoice) {
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      result = 'tie';
      break

    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      result = 'lose';
      break

    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      result = 'win';
      break
  }

  return result;
}

console.log(playRound('Rock', 'Paper'));

/*   if (playerChoice == 'rock') {
    if (computerChoice == 'rock') {
      // tie
    }
    else if (computerChoice == 'paper') {
      // lose
    }
    else if (computerChoice == 'scissors') {
      // win
    }
  }

  if (playerChoice == 'paper') {
    if (computerChoice == 'rock') {
      // win
    }
    else if (computerChoice == 'paper') {
      // tie
    }
    if (computerChoice == 'scissors') {
      // lose
    }
  }
} */