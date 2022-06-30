"use strict";const headerRock=document.querySelector(".js-imgHeaderStone").src="assets/images/rockvertical.png",headerScissors=document.querySelector(".js-imgHeaderScissors").src="assets/images/scissorvertical.png",headerPaper=document.querySelector(".js-imgHeaderPaper").src="assets/images/papervertical.png",computerChoiceDisplay=document.querySelector(".js_computer"),userChoiceDisplay=document.querySelector(".js_user"),btns=document.querySelectorAll("input"),resultDisplay=document.querySelector(".js_result");let userChoice,computerChoice,result;function handleClick(e){userChoice=e.target.id,userChoiceDisplay.innerHTML="rock"===userChoice?"<p> ROCK </p>":"paper"===userChoice?"<p> PAPER</p>":"<p> SCISSORS</p>",computerChoiceOption(),printResult(),resultColor()}function computerChoiceOption(){const e=Math.floor(3*Math.random())+1;console.log(e),computerChoice=e,computerChoiceDisplay.innerHTML=3===computerChoice?"<p> ROCK</p>":2===computerChoice?"<p>PAPER</p>":"<p>SCISSORS</p>"}function printResult(){"rock"===userChoice&&1===computerChoice||"paper"===userChoice&&3===computerChoice||"scissors"===userChoice&&2===computerChoice?result="YOU WIN":"rock"===userChoice&&3===computerChoice||"paper"===userChoice&&2===computerChoice||"scissors"===userChoice&&1===computerChoice?result="IT'S A DRAW":("rock"===userChoice&&2===computerChoice||"paper"===userChoice&&1===computerChoice||"scissors"===userChoice&&3===computerChoice)&&(result="YOU LOOSE"),resultDisplay.innerHTML=result}function resultColor(){"YOU WIN"===result?(resultDisplay.classList.remove("resultLoose"),resultDisplay.classList.remove("resultDraw"),resultDisplay.classList.add("resultWin")):"YOU LOOSE"===result?(resultDisplay.classList.remove("resultWin"),resultDisplay.classList.remove("resultDraw"),resultDisplay.classList.add("resultLoose")):"IT'S A DRAW"===result&&(resultDisplay.classList.remove("resultWin"),resultDisplay.classList.remove("resultLoose"),resultDisplay.classList.add("resultDraw"))}btns.forEach(e=>e.addEventListener("click",handleClick));