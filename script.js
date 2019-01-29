let death, secrets, penSword;
let pageTitle, pageTitleText, tryAgain, quizWrapper, result, formSubmit;

pageTitle = document.getElementById("page-title");
pageTitleText = document.getElementById("page-title").innerHTML;
tryAgain = document.getElementById("try-again");
quizWrapper = document.getElementById("quiz-wrapper");
result = document.getElementById("result");
formSubmit = document.getElementById("form-submit");

function processResults(){
  console.log('processResults')
  // get the checked boxes for each question category
  death = document.querySelector('input[name="death"]:checked');
  secrets = document.querySelector('input[name="secrets"]:checked');
  penSword = document.querySelector('input[name="penSword"]:checked');

  // if any of them don't have a checked option, alert the user and return to stop
  if(death == undefined || secrets == undefined || penSword == undefined) {
    alert('Please choose an answer for all questions');
    return;
  }

  // hide and unhide the relevant parts
  quizWrapper.style.display = "none";
  formSubmit.style.display = "none";
  tryAgain.style.display = "inline";
  result.style.display = "block";

  let personality = getPersonality();
  let name;
  if(personality == 1){
    name = "Cersei Lannister";
    pageTitle.innerHTML = `You are ${name}!!!`
    result.style.backgroundImage = "url('images/cersei.jpg')";
  } else if (personality == 2) {
    name = "Tyrion Lannister";
    pageTitle.innerHTML = `You are ${name}!!!`
    result.style.backgroundImage = "url('images/tyrion.jpg')";
  } else if (personality == 3) {
    name = "Arya Stark";
    pageTitle.innerHTML = `You are ${name}!!!`
    result.style.backgroundImage = "url('images/arya.jpg')";
  } else {
    name = "Jon Snow";
    pageTitle.innerHTML = `You are ${name}!!!`
    result.style.backgroundImage = "url('images/jonSnow.jpg')";
  }

  // result.style.backgroundImage = "url('img/character.png')";


}

function getPersonality(){
  console.log('getPersonality')
  let score = 0;
  score += deathDict[death.id];
  score += secretDict[secrets.id];
  score += penSwordDict[penSword.id];

  if(score > 7) {
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
  pageTitle.innerHTML = pageTitleText;
  quizWrapper.style.display = "flex";
  result.style.display = "none";
  tryAgain.style.display = "none";
  formSubmit.style.display = "inline";
  formSubmit.style.left = "auto";
  death.checked = false;
  secrets.checked = false;
  penSword.checked = false;
  death = undefined;
  secrets = undefined;
  penSword = undefined;
}

tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

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
