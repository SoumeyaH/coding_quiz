// getting elements from html using id
const countDownTimer = document.getElementById("countDownTimer");
const initialItemsContainer = document.getElementById(
  "initial-items-container"
);
const mainContainer = document.getElementById("main-container");
const startButton = document.getElementById("initial-start-button");
const inputInitials = document.createElement("input");
const submitScoreButton = document.createElement("button");

const questions = [
  {
    title: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    title:
      "Avery useful tool used during development and debugging for printing content to the debugger is",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    title: "The condition in an if/else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
];

// declaring variables in global
// countDownTimer.textContent = "60 seconds left";
let questionIndex = 0;
let timeLeft;
let score;

function removeInitialContent() {
  initialItemsContainer.remove();
}

const appendQuizCompleteContainer = () => {
  // to do stop event bubbling on submit button

  const quizCompleteContainer = document.createElement("div");
  quizCompleteContainer.setAttribute("class", "quiz-complete-container");

  const quizCompleteHeading = document.createElement("h2");
  quizCompleteHeading.setAttribute("class", "quiz-complete-heading");

  const quizCompleteForm = document.createElement("form");
  quizCompleteForm.setAttribute("class", "quiz-complete-form");
  quizCompleteHeading.textContent = "Quiz Completed";

  inputInitials.setAttribute("class", "input-initials");
  inputInitials.setAttribute("id", "input-initials");
  inputInitials.setAttribute("placeholder", "Enter Your Initials Here");

  submitScoreButton.setAttribute("class", "submit-score-button");
  submitScoreButton.textContent = "Submit";

  //appending elements
  mainContainer.appendChild(quizCompleteContainer);

  quizCompleteContainer.appendChild(quizCompleteHeading);
  quizCompleteContainer.appendChild(quizCompleteForm);

  quizCompleteForm.appendChild(inputInitials);
  quizCompleteForm.appendChild(submitScoreButton);
};

const createChoices = (choices) => {
  const answersContainerDiv = document.createElement("div");

  const createChoice = (choice) => {
    const div = document.createElement("div");

    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);
    answersContainerDiv.appendChild(div);
  };

  choices.forEach(createChoice);

  return answersContainerDiv;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.dataset.answer;
    const correctAnswer = currentTarget.dataset.answer;

    if (answer === correctAnswer) {
      questionIndex++;
      mainContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else {
      alert("Wrong try again");
    }
  }
};

const createQuestion = (question) => {
  const divQuestionContainer = document.createElement("div");
  divQuestionContainer.setAttribute("id", "question");
  divQuestionContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divQuestionContainer.append(h2, choices);

  divQuestionContainer.addEventListener("click", verifyChoice);

  return divQuestionContainer;
};

const renderQuestion = () => {
  if (questionIndex < questions.length) {
    const questionContainer = createQuestion(questions[questionIndex]);
    mainContainer.appendChild(questionContainer);
  } else {
    appendQuizCompleteContainer();
  }
};

const timer = () => {
  let timeLeft = 15;

  const Ticker = function () {
    if (questionIndex < questions.length) {
      if (timeLeft > 1) {
        timeLeft -= 1;
        countDownTimer.textContent = `${timeLeft} seconds left`;
      } else if (timeLeft === 1) {
        timeLeft -= 1;
        countDownTimer.textContent = `${timeLeft} second left`;
      } else if (timeLeft === 0) {
        countDownTimer.textContent = `times up`;
        clearInterval(timeInterval);
        mainContainer.removeChild(document.getElementById("question"));
        appendQuizCompleteContainer();
      }

      score = timeLeft;
    }
  };

  const timeInterval = setInterval(Ticker, 1000);
  return timeLeft;
};

const getHighScoreFromLocal = () => {
  const highScore = localStorage.getItem("listHighScores");

  if (highScore) {
    return JSON.parse(highScore);
  } else {
    return [];
  }
};

const storeTheHighScores = () => {
  const aHighScore = {
    initials: inputInitials.value,
    scores: score,
  };
  if (!aHighScore.initials) {
    alert("Please put in your initials");
  } else {
    const listHighScores = getHighScoreFromLocal();
    listHighScores.push(aHighScore);
    localStorage.setItem("listHighScores", JSON.stringify(listHighScores));
  }
};

const submitScore = (event) => {
  event.preventDefault();
  storeTheHighScores();
};

// Start button quiz click initiates quiz and timer
const startQuiz = () => {
  // removes first start page
  removeInitialContent();

  // renders questions if none left invokes function to render quiz complete
  renderQuestion();

  // quiz timer
  timer();

  // set local storage to empty array
  getHighScoreFromLocal();
};

startButton.addEventListener("click", startQuiz);

submitScoreButton.addEventListener("click", submitScore);
