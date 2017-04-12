var inquirer = require('inquirer');


var basicQuestions = [];
var basicAnswers = [];

var clozeQuestions = [];
var clozeAnswers = [];

// BasicCard Constructor
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}


// ClozeCard Constructor
function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
}