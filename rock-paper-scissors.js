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