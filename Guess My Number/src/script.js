'use strict';

//Variables
let number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Search for number logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Emptuy input
  if (!guess) {
    displayMessage('⛔ No Number...');
  } else if (guess < 1 || guess > 20) {
    displayMessage('⛔ Number must be between 1 and 20...');
  }
  //Correct number and highscore value
  else if (guess === number) {
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    displayMessage('🎉 Correct number!!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';
  }
  //Guessing is different than secret nunmber
  else if (guess !== number) {
    if (score > 0) {
      if (guess < number) {
        displayMessage('❄ Too low!');
      } else {
        displayMessage('🔥 Too high!');
      }

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost the game');
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//Restart game
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  let secretNumber = '?';

  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
