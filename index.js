var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("May I have your name? ");
console.log('Welcome To Quiz Game ' + userName + '!');

function quizGame(question, answer){
var userAnswer = readlineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("Right!");
  score = score + 1;
  console.log("Score is: " + score);
}else{
  console.log("Wrong!");
  console.log("Score is: " + score);
}
}

var questions=[{
  question : "What is my favourite colour? ",
  answer : "Black"
},{
  question : "What is my lucky number? ",
  answer : "9"
},{
  question : "What is my favorite food?  ",
  answer : "chicken biriyani"
}, {
  question : "What is my Birthday month? ",
  answer : "April"
}, {
  question : "In which year was I born? ",
  answer : "1997"
}, {
  question : "What is my favorite game? ",
  answer : "Football"
},{
  question : "What is my favorite animal? ",
  answer : "Dog"
},{
  question : "What is my favorite hero? ",
  answer : "Sudeep"
},{
  question : "What is my favorite heroine? ",
  answer :"Ashika Ranganath"
}]

for (var i=0; i<questions.length; i++){
  var activeQuestion = questions[i];
  quizGame(activeQuestion.question, activeQuestion.answer)
}
console.log("Thank you for playing! Your score is: " + score);

