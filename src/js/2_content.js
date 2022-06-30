'use strict';

const computerChoiceDisplay = document.querySelector('.js_computer');
const userChoiceDisplay = document.querySelector('.js_user');
const btns = document.querySelectorAll('input');
const resultDisplay = document.querySelector('.js_result');
let userChoice;
let computerChoice;
let result;

function handleClick(event) {
  userChoice = event.target.id;
  //userChoiceDisplay.innerHTML = userChoice;
  if (userChoice === 'rock') {
    userChoiceDisplay.innerHTML = `<p>ROCK</p>`;
  } else if (userChoice === 'paper') {
    userChoiceDisplay.innerHTML = `<p>PAPER</p>`;
  } else {
    userChoiceDisplay.innerHTML = `<p>SCISSORS</p>`;
  }
  computerChoiceOption();
  printResult();
}

function computerChoiceOption() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  computerChoice = randomNumber;
  if (computerChoice === 3) {
    computerChoiceDisplay.innerHTML = `<p>ROCK</p>`;
  } else if (computerChoice === 2) {
    computerChoiceDisplay.innerHTML = `<p>PAPER</p>`;
  } else {
    computerChoiceDisplay.innerHTML = `<p>SCISSORS</p>`;
  }
}

function printResult() {
  if (
    (userChoice === 'rock' && computerChoice === 1) ||
    (userChoice === 'paper' && computerChoice === 3) ||
    (userChoice === 'scissors' && computerChoice === 2)
  ) {
    result = `YOU WIN`;
  } else if (
    (userChoice === 'rock' && computerChoice === 3) ||
    (userChoice === 'paper' && computerChoice === 2) ||
    (userChoice === 'scissors' && computerChoice === 1)
  ) {
    result = `IT'S A DRAW`;
  } else if (
    (userChoice === 'rock' && computerChoice === 2) ||
    (userChoice === 'paper' && computerChoice === 1) ||
    (userChoice === 'scissors' && computerChoice === 3)
  ) {
    result = `YOU LOOSE`;
  }
  resultDisplay.innerHTML = result;
}
btns.forEach((btn) => btn.addEventListener('click', handleClick));
