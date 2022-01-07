'use strict';

// console.log(document.querySelector('.message').textContent);
// our secret number is defined outside the handler function because we want to declare the number once, if its inside, on each there will be a new number
let secretNumber = Math.trunc(Math.random() * 20) + 1; //to get random numbers

let score = 20;
let highscore = 0;

let bodyColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const redoWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// creating a function for .message in order to avoid repetition
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let newScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// document.querySelector('.number').textContent = secretNumber; //to display the real number, also // manipulating html
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!🚩';
    displayMessage('No number !🚩');

    //when the number is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    bodyColor('#60b347');
    // document.querySelector('body').style.backgroundColor = '#60b347'; // manipulating css
    // document.querySelector('.number').style.width = '30rem'; // manipulating css
    redoWidth('30rem');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low'; //instead of repeating the code like we did in the first solution, we now join the code together using ternary operator
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      newScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      // document.querySelector('.score').textContent = 0;
      newScore(0);
      // document.querySelector('body').style.backgroundColor = 'Red';
      bodyColor('Red');
    }
  }
});

//when the number is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'Red';
//   }

//   //when its too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'Red';
//   }

//we are just passing the second function into addEventLInsner function, so we are not calling the function it is the js that will call it when the event happens. we pass it into the addEVentListner becaue it will tell what the event will do, we first ask it to click then we also indicate what to do after click happens.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.score').textContent = score;
  newScore(score);
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  // document.querySelector('body').style.backgroundColor = '#222';
  bodyColor('#222');
  // document.querySelector('.number').style.width = ' 15rem';
  redoWidth('15rem');
});
