/* ---- A ---- */
function sum(number1,number2) {
    return result = parseInt(number1) + parseInt(number2);
}

console.log("6-A) The result is: " + sum(2,5));
/* ---- B ---- */
function sum2(a,b) {
    if (a === NaN|| b === NaN){
        alert("This is not a number, try again");
        return NaN;
    }else{
        return result = parseInt(a) + parseInt(b);
    }
}
console.log("6-B) The result is: " + sum2(4,6));
/* ---- C ---- */
function validateInteger(number){
    return Number.isInteger(number);
}
console.log("6-C) The result is: " + validateInteger(45));
console.log("6-C) The result is: " + validateInteger(45.54));
/* ---- D ---- */
function sum3(c,d) {
    if (isNaN(c) || isNaN(d)){
        alert("This is not a number, try again");
        return NaN;
    }else if (validateInteger(c)!== true){
        alert(c + "This is not an Integer number, try again");
        roundC = Math.round(c);
        return roundC;
    }else if (validateInteger(d)!== true){
        alert(d + "This is not an Integer number, try again");
        roundD = Math.round(d);
        return roundD;
    }else{
        return c + d;
    }
}
console.log("6-D) The result is: " + sum3("2df",23));
console.log("6-D) The result is: " + sum3(2.9,10));
console.log("6-D) The result is: " + sum3(10,10.5));
console.log("6-D) The result is: " + sum3(10,20));
/* ---- E ---- */
function validateComplete(e,f){
    if (isNaN(e) || isNaN(f)){
        alert("This is not a number, try again");
        return NaN;
    }else if (validateInteger(e)!== true){
        alert(e + "This is not an Integer number, try again");
        roundNumberE = Math.round(e);
        return roundNumberE;
    }else if (validateInteger(f) !== true){
        alert(f + "This is not an Integer number, try again");
        roundNumberF = Math.round(f);
        return roundNumberF;
    }else{
        return e + f;
    }
}

function sum4(e,f){
    return validateComplete(e,f);
}
console.log("6-E) The result is: " + sum4(3,"qwert"));