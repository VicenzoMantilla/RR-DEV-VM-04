/* ---- A ---- */
var week = ["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
var result = [];

for (var i = 0; i<(week.length); i++){
    result.push(week[i]);
}
alert(result);
/* ---- B ---- */
var week2 = ["lunes", "martes", "miercoles","jueves","viernes"];

for (var i = 0; i<(week2.length); i++){
    week2[i]=week2[i][0].toUpperCase() + week2[i].substring(1);
    alert(week2);
}
/* ---- C ---- */
var week3 = ["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
var sentence = "";

for (var i = 0; i<(week3.length); i++){
    sentence = sentence + ' ' + week3[i];
}
alert(sentence);
/* ---- D ---- */
var arrayEmpty = [];
var cons = 0;

for (var i = 0; i<10; i++){
    cons = i;
    arrayEmpty.push(cons);
}
console.log(arrayEmpty);