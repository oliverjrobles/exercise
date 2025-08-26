"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1;
let brugerGuess;

btn.addEventListener("click", klik_btn);
function klik_btn() {
  const brugerGuess = input.value;
  console.log("computerNum", computerNum);
  console.log("brugerGuess", brugerGuess);

  let feedbackText;
  if (brugerGuess < computerNum) {
    feedbackText = "Sike thats the wrong number??";
  } else if (brugerGuess < computerNum) {
    feedbackText = "Sike thats the wrong number??";
  } else {
    feedbackText = "Du har gættet rigtigt";
  }
  h2.textContent = feedbackText;
  console.log(feedbackText);
}
