// getting elements from html using id
const countDownTimer = document.getElementById("countDownTimer");
const initialItemsContainer = document.getElementById(
  "initial-items-container"
);
const mainContainer = document.getElementById("main-container");
const startButton = document.getElementById("initial-start-button");

const questions = [
  {
    title: "Whats the best star trek show?",
    choices: ["tos", "tng", "ds9", "voy"],
    correctAnswer: "ds9",
  },
  {
    title: "whats the best ds9 episode?",
    choices: [
      "in the pale moonlight",
      "the visitor",
      "little green men",
      "rejoined",
    ],
    correctAnswer: "in the pale moonlight",
  },
  {
    title: "whose the best captain?",
    choices: ["kirk", "picard", "sisko", "janeway"],
    correctAnswer: "sisko",
  },
];

// declaring variables in global
countDownTimer.textContent = "60 seconds left";
let questionIndex = 0;

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

  const inputInitials = document.createElement("input");
  inputInitials.setAttribute("class", "input-initials");
  inputInitials.setAttribute("placeholder", "Enter Your Initials Here");

  const submitScoreButton = document.createElement("button");
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
      // alert("sad times");
      countDownTimer -= 10;
      //to do cut time
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

  const callback = function () {
    if (timeLeft > 1) {
      console.log(timeLeft);
      countDownTimer.textContent = `${timeLeft} seconds left`;
      timeLeft -= 1;
    } else if (timeLeft === 1) {
      console.log(timeLeft);
      countDownTimer.textContent = `${timeLeft} second left`;
      timeLeft -= 1;
    } else if (timeLeft === 0) {
      console.log(timeLeft);
      countDownTimer.textContent = `times up`;
      clearInterval(timeInterval);
      mainContainer.removeChild(document.getElementById("question"));
      appendQuizCompleteContainer();
    }
  };

  const timeInterval = setInterval(callback, 1000);
};

const startQuiz = () => {
  removeInitialContent();

  renderQuestion();
  timer();

  //   mainContainer.removeChild(document.getElementById("question")); - used twice make function
  // to do stop timer when last question answered
  // penalise for wrong answer clicked
};

startButton.addEventListener("click", startQuiz);

// function callback(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   console.log(event);
//to do
// get score
// get initials from input
// make string initials + score
// store that in local
// navigate to high-score.html
// }
// submitScoreButtonElement.addEventListener("click", callback);
