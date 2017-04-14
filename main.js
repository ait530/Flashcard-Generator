var inquirer = require('inquirer');
// recursion in inquirer see examples.

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


// The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."
// The cloze deletion. This is the text we've chosen to remove: "George Washington".
// The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.



// data.js like the keys.js
// export the data.js into the keys.js


// basis.js  one with cloze.js