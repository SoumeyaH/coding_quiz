const highScoresContainer = document.getElementById(
  "highscores-main-container"
);
const containListScore = document.createElement("ul");
const clearBtn = document.getElementById("clearBtn");
const listHighScores = JSON.parse(localStorage.getItem("listHighScores"));

//

//

//

// const sortingHighScores = () => {
//   sortingFunction = (a, b) => {
//     return b.score - a.score;
//   };

//   highScores.sort(sortingFunction);
// };

const constructListItem = () => {
  const callback = (each) => {
    const listScore = document.createElement("li");
    listScore.textContent = `${each.initials} : ${each.scores}`;
    containListScore.appendChild(listScore);
  };

  listHighScores.map(callback);
};

const renderHighScores = () => {
  // sortingHighScores();

  constructListItem();
  highScoresContainerDiv = document.createElement("div");
  highScoresContainerDiv.setAttribute("id", "tableHighScores");

  highScoresContainerDiv.appendChild(containListScore);

  highScoresContainer.appendChild(highScoresContainerDiv);
};

const noHighScores = () => {
  const highScoresHeading = document.createElement("h2");
  highScoresHeading.textContent = "Go back and do the quiz to get a score";
  highScoresContainer.appendChild(highScoresHeading);
  return [];
};

const isHighScoresAvailable = () => {
  if (listHighScores) {
    renderHighScores();
  } else {
    noHighScores();
  }
};

const onLoad = () => {
  isHighScoresAvailable();
};

const clearLocalStorage = () => {
  localStorage.clear();
  highScoresContainer.textContent = "";
  noHighScores();
};

clearBtn.addEventListener("click", clearLocalStorage);

window.addEventListener("load", onLoad);
