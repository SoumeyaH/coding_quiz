const highScoresContainer = document.getElementById(
  "highscores-main-container"
);

const highScores = JSON.parse(localStorage.getItem("highscores"));

const renderHighScore = () => {};

const noHighScores = () => {
  const highScoresHeading = document.createElement("h2");
  highScoresHeading.textContent = "Go back and do the quiz to get a score";
  highScoresContainer.appendChild(highScoresHeading);
};

const isHighscoresAvailable = () => {
  if (highScores === null) {
    noHighScores();
  } else {
    // render highscores
  }
};

const onLoad = () => {
  isHighscoresAvailable();
};

window.addEventListener("load", onLoad);

//to do
//submit button should lead to here
// on load event listener to start everything
// see if theres highscores in local storage
//if there are none render div no highscores yet go play
// if there are parse from string JSON.parse
// then render the highscores
// highscores should be sorted .sort()
