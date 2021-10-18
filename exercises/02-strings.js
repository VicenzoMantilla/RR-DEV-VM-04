/* ---- A ---- */
var bigWord = "friendship"

console.log(bigWord.toUpperCase());
/* ---- B ---- */
var sameWord= "friendship";

var subWord = sameWord.substring(0,5);

console.log(subWord);
/* ---- C ---- */
var theSameWord = "friendship";

var theResult= theSameWord.substring(7,10);

console.log(theResult);
/* ---- D ---- */
var friendship = "friendship";

var change = friendship.toUpperCase();

var toShow = change.substring(0,1)+ change.substring(1,10).toLowerCase();

console.log(toShow);
/* ---- E ---- */
var twoWords = "cheese cake";

var position = twoWords.indexOf(" ");

console.log("The position of the blank space is : " + position);
/* ---- F ---- */
var friend = "friendship relationship";

var index = friend.indexOf(" ");

var result = friend.substring(0,1).toUpperCase()+friend.substring(1,10).toLowerCase()+" "+friend.substring(index+1,12).toUpperCase()+friend.substring(12,23).toLowerCase();

console.log(result);