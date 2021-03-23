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
      appendQuizCompleteContainer();
    }
  };

  const timeInterval = setInterval(callback, 1000);
}

function appendQuizCompleteContainer() {
  // to do stop event bubbling on submit button

  //appending elements
  mainContainerElement.appendChild(quizCompleteContainerElement);
  quizCompleteContainerElement.appendChild(quizCompleteHeadingElement);
  quizCompleteContainerElement.appendChild(quizCompleteFormElement);
  quizCompleteFormElement.appendChild(inputInitialsElement);
  quizCompleteFormElement.appendChild(submitScoreButtonElement);

  // setting text content for elements
  quizCompleteHeadingElement.textContent = "Quiz Completed";
  submitScoreButtonElement.textContent = "Submit";

  //setting attributes for elements
  quizCompleteContainerElement.setAttribute("class", "quiz-complete-container");
  quizCompleteHeadingElement.setAttribute("class", "quiz-complete-heading");
  quizCompleteFormElement.setAttribute("class", "quiz-complete-form");
  inputInitialsElement.setAttribute("class", "input-initials");
  inputInitialsElement.setAttribute("placeholder", "Enter Your Initials Here");
  submitScoreButtonElement.setAttribute("class", "submit-score-button");
}

function callback(event) {
  event.preventDefault();
  //to do
  // get score
  // get initials from input
  // make string initials + score
  // store that in local
  // navigate to high-score.html
}

const startQuiz = () => {
  removeInitialContent();
  timer();
  // when timer hits zero it invokes appendQuizCompleteContainer
  // to do also add appendQuizCompleteContainer to final when final question answered
};

startButton.addEventListener("click", startQuiz);
submitScoreButtonElement.addEventListener("click", callback);

{
  /* <div class="question-one-container">
      <h2>question 1</h2>
      <h3>the actual question</h3>
      <div class="answers-one-container">
  to do do make a flex box but answers two in a line, under 768 column
        <button id="answer 0">answer 0</button>
        <button id="answer 1">answer 1</button>
        <button id="answer 2">answer 2</button>
        <button id="answer 3">answer 3</button>
      </div>
    </div> */
}
