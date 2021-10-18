/* ---- A ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[4] + " " + months [10]);
/* ---- B ---- */
var months2=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months2.sort());
/* ---- C ---- */
var months3=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newDay=months3.push(["lunes"]);
var result=months3.unshift(["martes"]);

console.log(result);
/* ---- D ---- */
var months4=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newShift= months4.shift();
var newPop= months4.pop();

console.log(months4);
/* ---- E ---- */
var months5=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newReverse= months5.reverse();

console.log(newReverse);
/* ---- F ---- */
var months6=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthsTogether= months6.join('-');

console.log(monthsTogether);
/* ---- G ---- */
var months7=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var newSlice= months7.slice(4,11);

console.log(newSlice);
