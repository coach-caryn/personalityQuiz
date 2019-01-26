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
}

function resetQuiz(){
  console.log('resetQuiz')
}

tryAgain.onClick = resetQuiz;
formSubmit.onClick = processResults;
