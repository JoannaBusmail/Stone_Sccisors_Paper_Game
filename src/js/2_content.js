'use strict';

const computerChoiceDisplay = document.querySelector('.js_computer');
const userChoiceDisplay = document.querySelector('.js_user');
const btns = document.querySelectorAll('input');
const result = document.querySelector('.js_result');
let userChoice;

function handleClick(event) {
  userChoice = event.target.id;
  userChoiceDisplay.innerHTML = userChoice;
}

btns.forEach((btn) => btn.addEventListener('click', handleClick));
