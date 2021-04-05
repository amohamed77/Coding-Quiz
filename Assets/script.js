let questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<java>", "<scripting>", "<script>"],
    answer: "<script>"
  },
  {
    title: "Commonly used data type Do Not include?",
    choices: ["strings", "Boolean", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["header","footer","body","head"],
    answer: "body"
  },
  {
    title:
      "Strings have to in __ when becoming a variable.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  }
];

let startButton = document.getElementById("startquiz");
let highscoreButton = document.getElementById("highscores");
let secondsEl = document.getElementById("seconds");
let question = document.getElementById("question");
let container = document.querySelector("#displayQuestions");
let storage = "newscore";
let secondsLeft = 100;
let timer;
let i = 0;
let message = document.createElement("h1");

document.querySelector("#displayQuestions").style.display = "none";
document.querySelector(".gameover").style.display = "none";

let ans1 = document.getElementById("question1");
let ans2 = document.getElementById("question2");
let ans3 = document.getElementById("question3");
let ans4 = document.getElementById("question4");




startButton.addEventListener("click", startQuestions);

function startQuestions() {
  document.querySelector("#displayQuestions").style.display = "initial";
  countdown();
  document.querySelector(".start").textContent = null;
  ans1.addEventListener("click", function() {
    checkAnswer(ans1);
  });
  ans2.addEventListener("click", function() {
    checkAnswer(ans2);
  });
  ans3.addEventListener("click", function() {
    checkAnswer(ans3);
  });
  ans4.addEventListener("click", function() {
    checkAnswer(ans4);
  });
  displayQuestions(0);
}

function displayQuestions(i) {
  question.textContent = questions[i].title;
  ans1.textContent = questions[i].choices[0];
  ans2.textContent = questions[i].choices[1];
  ans3.textContent = questions[i].choices[2];
  ans4.textContent = questions[i].choices[3];
}

function checkAnswer(element) {
  correct = questions[i].answer;
  if (element.textContent === correct) {
    Msg("You got it!");
  } else {
    secondsLeft = secondsLeft - 10;
    Msg("That's incorrect!");
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      endQuiz();
    }
  }
  i++;

  if (i === questions.length) {
    endQuiz();
  } else {
    displayQuestions(i);
  }
}

function Msg(messageContent) {
  message.style.fontStyle = "bold";
  message.textContent = messageContent;
  container.appendChild(message);
  setTimeout(function() {
    message.textContent = null;
  }, 200);
}

function countdown() {
  secondsEl.textContent = secondsLeft;
  timer = setInterval(Timer, 1000);
  function Timer() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
  }
}
// end quiz, display game over
function endQuiz() {
  clearInterval(timer);
  secondsEl.textContent = secondsLeft;
  document.querySelector("#displayQuestions").style.display = "none";
  document.querySelector(".gameover").style.display = "initial";
  document.querySelector("#score").textContent = secondsLeft;
}

// Highscore in local storage
highscoreButton.addEventListener("click", function(event) {
  let oldscore = JSON.parse(localStorage.getItem(storage));
  
  let score = document.getElementById("score").textContent;
  let initials = document.getElementById("initials").value;
  let newUserscore = {
    initials: initials,
    score: score
  };

  oldscore.push(newscore);
  localStorage.setItem(storage, JSON.stringify(oldscore));


});
