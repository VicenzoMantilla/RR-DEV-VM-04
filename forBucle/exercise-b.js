var week=["lunes", "martes", "miercoles","jueves","viernes"];

for (var i=0; i<(week.length); i++){
    week[i]=week[i][0].toUpperCase() + week[i].substring(1);
    alert(week);
}