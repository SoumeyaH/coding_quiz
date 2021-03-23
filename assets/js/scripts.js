const countDownTimerElement = document.getElementById("countDownTimer");
const initialItemsContainerElement = document.getElementById(
  "initial-items-container"
);
const startButton = document.getElementById("initial-start-button");
countDownTimerElement.textContent = "60 seconds left";

function timer() {
  let timeLeft = 3;

  const callback = function () {
    if (timeLeft > 1) {
      console.log(timeLeft);
      countDownTimerElement.textContent = `${timeLeft} seconds left`;
      timeLeft -= 1;
    } else if (timeLeft === 1) {
      console.log(timeLeft);
      countDownTimerElement.textContent = `${timeLeft} second left`;
      timeLeft -= 1;
    } else if (timeLeft === 0) {
      console.log(timeLeft);
      countDownTimerElement.textContent = `times up`;
      clearInterval(timeInterval);
    }
  };

  const timeInterval = setInterval(callback, 1000);
}

function removeInitialContent() {
  initialItemsContainerElement.remove();
}

const startQuiz = () => {
  // timer();
  removeInitialContent();
};

startButton.addEventListener("click", startQuiz);

// start button is pressed
// remove initial-items-container from main-container
//put in first quiz question

//when time reaches 0 go to highscores form page
