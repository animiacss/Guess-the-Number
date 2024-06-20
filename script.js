'use strict';
//

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Not a Number... Sorry, try again😐';
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      'Congratilations, you guessed right🎉🎉';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🤨Too high🤨';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose womp womp😭😭';
    }
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = '😵‍💫Too low😵‍💫';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose womp womp😭😭';
    }
  }
});
