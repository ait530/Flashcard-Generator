var flashCards = require('./data.js');
var inquirer = require('inquirer');
var fs = require('fs');

var basicFlashCards = new BasicCard(flashCards.basicCards);
// console.log(basicFlashCards);
var clozeFlashCards = new ClozeCard(flashCards.clozeCards);
// console.log(clozeFlashCards);

var cmdInput = process.argv[2];
getInput(cmdInput);
function getInput(cmdInput, args) {
    if (cmdInput) {
        switch (cmdInput) {
        case 'basic':
            // console.log("basic cards is running");
            BasicCard();
            break;
        case 'cloze':
            // console.log('cloze cards is running');
            ClozeCard();
        }
    }
}

// BasicCard Constructor
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}
console.log(new BasicCard());


// creates the printInfo method and applies it to all programmer objects
BasicCard.prototype.printInfo = function() {
  console.log("Front: " + this.front + "\nBack: " + this.back);
};

// ClozeCard Constructor
function ClozeCard(front, back) {
  this.front = front;
  this.back = back;
}
console.log(new ClozeCard());

// creates the printInfo method and applies it to all programmer objects
ClozeCard.prototype.printInfo = function() {
  console.log("Front: " + this.front + "\nBack: " + this.back);
};


function logged() {
    // captures all command line inputs
    var inputs = process.argv.slice(2).join(" ");
    // feeeds the  data to the log file
    // console.log(inputs);
    // appends data to the log file after each run
    fs.appendFile("log.txt", "node main.js: " + inputs + "\n", function (error) {
        if (error) {
            throw error;
        }
        else {
            console.log(" updated log file! ");
        }
    });
    return true;
}


// Function for determining which command is executed
var pick = function(caseData, functionData) {
  switch (caseData) {
    case "basic":
     BasicCard();
      break;
    case "cloze":
      ClozeCard();
  }
};

// Function which takes in command line arguments and executes correct function accordigly
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv[3]);







