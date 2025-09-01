// There are two types of timers
// timeout and intervals

// timeout = after the timer reaches zero, a task happens
// this is like a countdown. The task happens once

// interval = a task to continuously repeat after a specific amount of time
// intervals have to be stopped

//TIMEOUT:
//Structure - requires two arguments. 1) the function   2) the timeout delay in miliseconds

// setTimeout(function () {
//   console.log("This was triggered after 3 seconds");
// }, 3000);

// INTERVAL:
//Structure - requires two arguments. 1) the function   2) the timeout delay in miliseconds
// setInterval(function () {
//task
// }, 2000);

// //TODO: I want to send a message to the console repeatedly after 2 seconds
// setInterval(function () {
//   console.log("I happen every 2 seconds forever");
// }, 2000);

// Intervals need to be stopped - we can use a timeout to stop an interval
// const intervalConst = setInterval(function () {
//   console.log("Please someone stop me");
// }, 3000);

// setTimeout(function () {
//   clearInterval(intervalConst);
// }, 12000);

//TODO: display a message, then after 5 seconds hide it again
const showTextButton = document.getElementById("show-text");
const textToDisplay = document.getElementById("text-to-display");
textToDisplay.style.visibility = "hidden";

showTextButton.addEventListener("click", function () {
  textToDisplay.style.visibility = "visible";
  setTimeout(function () {
    textToDisplay.style.visibility = "hidden";
  }, 5000);
});

//TODO: Click a button to start a timer. Pressing the button again to stop.
const timerButton = document.getElementById("timer-button");
const timerText = document.getElementById("timer-text");
let isTicking = false;
let timeAmount = 0;
let timer;

timerButton.addEventListener("click", function () {
  isTicking = !isTicking;

  if (isTicking) {
    timer = setInterval(function () {
      timeAmount++;
      timerText.textContent = `Timer Started: ${timeAmount}`;
      console.log(timeAmount);
    }, 1000);
  } else if (!isTicking) {
    clearInterval(timer);
    timerText.textContent = `Timer Stopped: ${timeAmount}`;
  }
});
