/* ---- ---- */
var week=["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
var result=[];

for (var i=0; i<(week.length); i++){
    result.push(week[i]);
}
alert(result);
/* ---- ---- */
var week=["lunes", "martes", "miercoles","jueves","viernes"];

for (var i=0; i<(week.length); i++){
    week[i]=week[i][0].toUpperCase() + week[i].substring(1);
    alert(week);
}
/* ---- ---- */
var week=["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
var sentence="";

for (var i=0; i<(week.length); i++){
    sentence= sentence + ' ' + week[i];
}
alert(sentence);
/* ---- ---- */
var arrayEmpty=[];
var cons=0;

for (var i=0; i<10; i++){
    cons=i;
    arrayEmpty.push(cons);
}
console.log(arrayEmpty);