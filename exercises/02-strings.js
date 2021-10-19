/* ---- A ---- */
var bigWord = "friendship";

console.log("2-A) The result is: " + bigWord.toUpperCase());
/* ---- B ---- */
var sameWord= "friendship";

var subWord = sameWord.substring(0,5);

console.log("2-B) The result is: " + subWord);
/* ---- C ---- */
var theSameWord = "friendship";

var theResult= theSameWord.substring(7,10);

console.log("2-C) The result is: " + theResult);
/* ---- D ---- */
var friendship = "friendship";

var change = friendship.toUpperCase();

var toShow = change.substring(0,1)+ change.substring(1,10).toLowerCase();

console.log("2-D) The result is: " + toShow);
/* ---- E ---- */
var twoWords = "cheese cake";

var position = twoWords.indexOf(" ");

console.log("2-E) The position of the blank space is : " + position);
/* ---- F ---- */
var friend = "friendship relationship";

var index = friend.indexOf(" ");

var result = friend.substring(0,1).toUpperCase()+friend.substring(1,10).toLowerCase()+" "+friend.substring(index+1,12).toUpperCase()+friend.substring(12,23).toLowerCase();

console.log("2-F) The result is: " + result);