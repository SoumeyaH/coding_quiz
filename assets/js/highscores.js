const highScoresContainer = document.getElementById(
  "highscores-main-container"
);

const highScores = localStorage.getItem("listHighScores");
const highScore = JSON.parse(highScores);

console.log(highScores);

// const sortingHighScores = () => {
//   sortingFunction = (a, b) => {
//     return b.score - a.score;
//   };

//   highScores.sort(sortingFunction);
// };

// const renderHighScores = () => {
//   sortingHighScores();

//   highScoresContainerDiv = document.createElement("div");
//   highScoresContainerDiv.setAttribute("id", "tableHighScores");
// };

// const noHighScores = () => {
//   const highScoresHeading = document.createElement("h2");
//   highScoresHeading.textContent = "Go back and do the quiz to get a score";
//   highScoresContainer.appendChild(highScoresHeading);
//   return [];
// };

// const isHighScoresAvailable = () => {
//   if (highScores === null) {
//     noHighScores();
//   } else {
//     renderHighScores();
//   }
// };

// const onLoad = () => {
//   isHighScoresAvailable();
// };

// window.addEventListener("load", onLoad);

//to do
//submit button should lead to here
// then render the highscores
// highscores should be sorted .sort()
// clear highscores - eventlistener, function - add id to button
