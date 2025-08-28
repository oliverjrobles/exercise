"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function addEventListenersTopButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

function rockKlik() {
  //console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}
function paperKlik() {
  //console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}
function scissorsKlik() {
  //console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randoNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randoNum];
  console.log("computerChoice", computerChoice);
  //console.log(userChoice);
  //computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  player1.addEventListener("animationend", animationEnd);
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function animationEnd() {
  //evalutation
  player1.removeEventListener("animationend", animationEnd);
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  //player 1
  if (userChoice === "rock") {
    player1.classList.add("rock");
  } else if (userChoice === "paper") {
    player1.classList.add("paper");
  } else if (userChoice === "scissors") {
    player1.classList.add("scissors");
  }

  //player 2
  if (computerChoice === "rock") {
    player2.classList.add("rock");
  } else if (computerChoice === "paper") {
    player2.classList.add("paper");
  } else if (computerChoice === "scissors") {
    player2.classList.add("scissors");
  }

  determineWinner();
}

//TIL NÅR EN VINNER SKAL FINDES
function determineWinner() {
  let result;

  if (userChoice === computerChoice) {
    result = "draw";
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    result = "win";
  } else {
    result = "lose";
  }

  console.log(result);
  showResultScreen(result);
}

//TIL NÅR SPILLET ER SLUT
function showResultScreen(result) {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#" + result).classList.remove("hidden");

  // Reset the game after a delay
  setTimeout(resetGame, 2000);
}

// Add this function to reset the game for another round
function resetGame() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  // Clear result if you have a result element
  const resultElement = document.querySelector("#result");
  if (resultElement) {
    resultElement.textContent = "";
  }
}

addEventListenersTopButtons();
