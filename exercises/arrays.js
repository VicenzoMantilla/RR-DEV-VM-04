/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[4] + ' ' + months [10]);
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months.sort());
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var months2=months.push(["lunes"]);
var months3=months.unshift(["martes"]);

console.log(months3);
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var months2= months.shift();
var months3= months.pop();

console.log(months);
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var months2= months.reverse();

console.log(months2);
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthsTogether= months.join('-');

console.log(monthsTogether);
/* ---- ---- */
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var months2= months.slice(4,11);

console.log(months2);
