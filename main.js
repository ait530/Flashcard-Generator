var inquirer = require('inquirer');
var fs = require('fs');
var key = require('./data.js');
// recursion in inquirer see examples.


var cmdInput = process.argv[2];
getInput(cmdInput);
function getInput(cmdInput, args) {
    if (cmdInput) {
        switch (cmdInput) {
        case 'basic':
            console.log("BASIC CARDS YAH");
            basicCards();
            break;
        case 'cloze':
            console.log('cloze is running');
            // if (args) {
            //     console.log(' Argument passed: ' + args);
            //     clozeCards(args);
            // }
        }
    }
}

// function runCommand() {
//     fs.readFile('random.txt', 'utf-8', function (error, data) {
//         var fileCommands = data.split(',');
//         getInput(fileCommands[0], fileCommands[1]);
//     });
// }
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













// Function which takes in command line arguments and executes correct function accordigly
// var runThis = function(argOne, argTwo) {
//   pick(argOne, argTwo);
// };

// // MAIN PROCESS
// // =====================================
// runThis(process.argv[2], process.argv[3]);













// var basicQuestions = [];
// var basicAnswers = [];

// var clozeQuestions = [];
// var clozeAnswers = [];

// // BasicCard Constructor
// function BasicCard(front, back) {
//   this.front = front;
//   this.back = back;
// }




// // ClozeCard Constructor
// function ClozeCard(text, cloze) {
//   this.text = text;
//   this.cloze = cloze;
// }


// The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."
// The cloze deletion. This is the text we've chosen to remove: "George Washington".
// The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.



// data.js like the keys.js
// export the data.js into the keys.js


// basis.js  one with cloze.js