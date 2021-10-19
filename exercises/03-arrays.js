/* ---- A ---- */
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log("3-A) The result is: " + months[4] + " " + months [10]);
/* ---- B ---- */
var months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log("3-B) The result is: " + months2.sort());
/* ---- C ---- */
var months3 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newDay = months3.push(["lunes"]);
var result = months3.unshift(["martes"]);

console.log("3-C) The result is: " + result);
/* ---- D ---- */
var months4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newShift = months4.shift();
var newPop = months4.pop();

console.log("3-D) The result is: " + months4);
/* ---- E ---- */
var months5 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newReverse = months5.reverse();

console.log("3-E) The result is: " + newReverse);
/* ---- F ---- */
var months6 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthsTogether = months6.join("-");

console.log("3-F) The result is: " + monthsTogether);
/* ---- G ---- */
var months7 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newSlice = months7.slice(4,11);

console.log("3-G) The result is: " + newSlice);
