const timerElement = document.getElementById("countDownTimer");
const startButton = document.getElementById("initial-start-button");
timerElement.textContent = "60 seconds left";

function timer() {
  let timeLeft = 3;

  const callback = function () {
    if (timeLeft > 1) {
      console.log(timeLeft);
      timerElement.textContent = `${timeLeft} seconds left`;
      timeLeft -= 1;
    } else if (timeLeft === 1) {
      console.log(timeLeft);
      timerElement.textContent = `${timeLeft} second left`;
      timeLeft -= 1;
    } else if (timeLeft === 0) {
      console.log(timeLeft);
      timerElement.textContent = `times up`;
      clearInterval(timeInterval);
    }
  };

  // to do if time = 0 change text to times up

  const timeInterval = setInterval(callback, 1000);
}

timer();

const startQuiz = () => {};

startButton.addEventListener("click", startQuiz);

// start button is pressed
// remove initial-items-container from main-container
//put in first quiz question
//start counter decrementing from 60 seconds
