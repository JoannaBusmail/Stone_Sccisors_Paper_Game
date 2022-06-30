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
    userChoiceDisplay.innerHTML = `<p> ROCK </p>`;
  } else if (userChoice === 'paper') {
    userChoiceDisplay.innerHTML = `<p> PAPER</p>`;
  } else {
    userChoiceDisplay.innerHTML = `<p> SCISSORS</p>`;
  }
  computerChoiceOption();

  printResult();
  resultColor();
}

function computerChoiceOption() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  computerChoice = randomNumber;
  if (computerChoice === 3) {
    computerChoiceDisplay.innerHTML = `<p> ROCK</p>`;
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

function resultColor() {
  if (result === `YOU WIN`) {
    resultDisplay.classList.remove('resultLoose');
    resultDisplay.classList.remove('resultDraw');
    resultDisplay.classList.add('resultWin');
  } else if (result === `YOU LOOSE`) {
    resultDisplay.classList.remove('resultWin');
    resultDisplay.classList.remove('resultDraw');
    resultDisplay.classList.add('resultLoose');
  } else if (result === `IT'S A DRAW`) {
    resultDisplay.classList.remove('resultWin');
    resultDisplay.classList.remove('resultLoose');
    resultDisplay.classList.add('resultDraw');
  }
}
btns.forEach((btn) => btn.addEventListener('click', handleClick));
