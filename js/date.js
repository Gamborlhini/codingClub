/* This top part just gets the date and turns it into what day out of 365 days of the year this is */

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

/* This part parses the file into an array with each problem */
var fs = require('fs');
var problems = fs.readFileSync('../assets/problems.txt').toString().split("\n");

/* Initializing variables */
var todaysProblem, oldproblems;
var todaysProblemPredisplay, oldproblemsPredisplay;
var problemDisplay = document.getElementById("problemDisplay").innerHTML;
var oldproblemsDisplay = document.getElementById("oldproblemsDisplay").innerHTML;

/* Trimming down the problems array to only what we need so we don't get lag later*/
if (problems.length>365) {
  problems = problems.split(364);
}

/*
Making sure we don't get negative references to the array with the if/else statement.
Then compiling the oldproblems array by taking yesterdays problem and before mathematics
-2 because the first date possible is 1 not 0
*/
if (day != 1) {
  oldproblems = problems.split(day-2);
}
else if (day == 1) {
  oldproblems = [];
}

/* Setting todays problem as day-1 because first possible date is 1 not 0 */
todaysProblem = problems[day-1];

/* Prepping everything for display */
oldproblemsPredisplay = oldproblems.join("\r\n");
todaysProblemPredisplay = now.toDateString() + ": " + todaysProblem;

/* Displaying everything */
problemDisplay = todaysProblemPredisplay;
oldproblemsDisplay = oldproblemsPredisplay;
