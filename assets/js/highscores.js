const highScoresContainer = document.getElementById(
  "highscores-main-container"
);

const highScores = JSON.parse(localStorage.getItem("highscores"));
console.log(highScores);

const renderHighScore = () => {};

const noHighScores = () => {
  const highScoresHeading = document.createElement("h2");
  highScoresHeading.textContent = "Go back and do the quiz to get a score";
  highScoresContainer.appendChild(highScoresHeading);
  return [];
};

const isHighScoresAvailable = () => {
  if (highScores === null) {
    noHighScores();
  } else {
    // render highcores
  }
};

const onLoad = () => {
  isHighScoresAvailable();
};

window.addEventListener("load", onLoad);

//to do
//submit button should lead to here
// on load event listener to start everything
// then render the highscores
// highscores should be sorted .sort()
// clear highscores - eventlistener, function
