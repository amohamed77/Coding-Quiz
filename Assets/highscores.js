let resetButton = document.getElementById("reset");
let displayScores = document.getElementById("shown-scores");


resetButton.addEventListener("click", reset);
function reset() {
  localStorage.clear();
}
function displayHighscores() {
  let newscore = JSON.parse(localStorage.getItem("newscore"));
  if (initials && score === null) {
    return;
  } 
  
  for (i = 1; i <= newscore.length; i++) {
  }  
  // scores not populating in local storage???
}
displayHighscores();
