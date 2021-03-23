// getting elements from html using id
const countDownTimerElement = document.getElementById("countDownTimer");
const initialItemsContainerElement = document.getElementById(
  "initial-items-container"
);
const mainContainerElement = document.getElementById("main-container");
const startButton = document.getElementById("initial-start-button");

// creating elements in javascript
// quiz completed submit score bit
const quizCompleteContainerElement = document.createElement("div");
const quizCompleteHeadingElement = document.createElement("h2");
const quizCompleteFormElement = document.createElement("form");
const inputInitialsElement = document.createElement("input");
const submitScoreButtonElement = document.createElement("button");

// declaring variables in global
countDownTimerElement.textContent = "60 seconds left";

function removeInitialContent() {
  initialItemsContainerElement.remove();
}

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

function appendQuizCompleteContainer() {
  quizCompleteContainerElement.appendChild(quizCompleteHeadingElement);
  quizCompleteContainerElement.appendChild(quizCompleteFormElement);
  quizCompleteFormElement.appendChild(inputInitialsElement);
  quizCompleteFormElement.appendChild(submitScoreButtonElement);
}

const startQuiz = () => {
  removeInitialContent();
  timer();
  appendQuizCompleteContainer();
};

startButton.addEventListener("click", startQuiz);

// start button is pressed
// remove initial-items-container from main-container
//put in first quiz question

//when time reaches 0 go to highscores form page

/* <div>
        <h2>Quiz Completed</h2>
        <form action="">
          <input type="text" placeholder="Enter Your Initials" />
          <button>Submit</button>
        </form>
    </div> */
