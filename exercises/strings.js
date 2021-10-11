/* ---- ---- */
var bigWord = "friendship"

console.log(bigWord.toUpperCase());
/* ---- ---- */
var sameWord= "friendship";

var subWord = sameWord.substring(0,5);

console.log(subWord);
/* ---- ---- */
var sameWord = "friendship";

var subWord= sameWord.substring(7,10);

console.log(subWord);
/* ---- ---- */
var friend = "friendship";

var change = friend.toUpperCase();

var toShow = change.substring(0,1)+ change.substring(1,10).toLowerCase();

console.log(toShow);
/* ---- ---- */
var twoWords = "cheese cake";

var position = twoWords.indexOf(" ");

console.log("The position of the blank space is : " + position);
/* ---- ---- */
var friend = "friendship relationship";

var upperWord = friend.toUpperCase();

var result = upperWord.substring(0,1)+upperWord.substring(1,10).toLowerCase()+" "+upperWord.substring(11,12)+upperWord.substring(12,23).toLowerCase();

console.log(result);