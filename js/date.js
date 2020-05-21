/* This top part just gets the date and turns it into what day out of 365 days of the year this is */

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var dayminusone = day-1;
var dayminustwo = day-2;

/* Initializing variables */
var todaysProblem, oldproblems;
var todaysProblemPredisplay, oldproblemsPredisplay;
var problemDisplay = document.getElementById("problemDisplay");
var oldproblemsDisplay = document.getElementById("oldproblemsDisplay");

/* This part parses the file into an array with each problem */


/* Trimming down the problems array to only what we need so we don't get lag later*/
if (problems.length>365) {
  problems = problems.slice(0,364);
}

/*
Making sure we don't get negative references to the array with the if/else statement.
Then compiling the oldproblems array by taking yesterdays problem and before mathematics
-2 because the first date possible is 1 not 0
*/
if (day != 1) {
  oldproblems = problems.slice(0,dayminustwo);
}
else if (day == 1) {
  oldproblems = [];
}

/* Setting todays problem as day-1 because first possible date is 1 not 0 */
todaysProblem = problems[dayminusone];

/* Prepping everything for display */
oldproblemsPredisplay = oldproblems.join("<br>");
todaysProblemPredisplay = now.toDateString() + ": " + todaysProblem;

/* Displaying everything */
document.getElementById("problemDisplay").innerHTML = todaysProblemPredisplay;
document.getElementById("oldproblemsDisplay").innerHTML = oldproblemsPredisplay;
