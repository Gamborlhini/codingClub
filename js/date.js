var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var fs = require('fs');
var problems = fs.readFileSync('../assets/problems.txt').toString().split("\n");
var todaysProblem, oldproblems;
var todaysProblemPredisplay, oldproblemsPredisplay;
var problemDisplay = document.getElementById("problemDisplay").innerHTML;
var oldproblemsDisplay = document.getElementById("oldproblemsDisplay").innerHTML;
problems = problems.split(364);
if (day != 1) {
  oldproblems = problems.split(day-2);
}
else if (day == 1) {
  oldproblems = [];
}
todaysProblem = problems[day-1];
oldproblemsPredisplay = oldproblems.join("\r\n");
todaysProblemPredisplay = now.toDateString() + ": " + todaysProblem;
