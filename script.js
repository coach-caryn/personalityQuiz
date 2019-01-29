let death, secrets, penSword;
let pageTitle, pageTitleText, tryAgain, quizWrapper, result, formSubmit;

pageTitle = document.getElementById("page-title");
pageTitleText = pageTitle.innerHTML;
tryAgain = document.getElementById("try-again");
quizWrapper = document.getElementById("quiz-wrapper");
result = document.getElementById("result");
formSubmit = document.getElementById("form-submit");

function processResults(){
  console.log('processResults')
}

function getPersonality(){
  console.log('getPersonality')
  let score = 0;
  score += deathDict[death.id];
  score += secretDict[secrets.id];
  score += penSwordDict[penSword.id];

  if(score < 7) {
    return 4; // Jon Snow
  } else if (score > 5) {
    return 3; // Arya Stark
  } else if (score > 2) {
    return 2; // Tyrion Lannister
  } else {
    return 1; // Cersei Lannister
  }
}

function resetQuiz(){
  console.log('resetQuiz')
}

tryAgain.onClick = resetQuiz;
formSubmit.onClick = processResults;

let deathDict = {
  old: 3,
  exciting: 2,
  peaceful: 1,
  immortal: 0
};

let secretDict = {
  "no-secrets": 0,
  huge: 2,
  "a-few": 3,
  many: 1
};

let penSwordDict = {
  absolutely: 0,
  situational: 3,
  sword: 2,
  both: 1
};

// Jon Snow 8-9
// Arya Stark 6-7
// Cersei 3-5
// Tyrion 0-2
