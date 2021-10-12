/* ---- A ---- */
var number1 = prompt();
var number2 = prompt();

function sum(number1,number2) {
    return result = parseInt(number1) + parseInt(number2);
}

console.log(sum(number1,number2));
/* ---- B ---- */
var a = prompt();
var b = prompt();

function sum2(a,b) {
    if (a === NaN|| b === NaN){
        alert("This is not a number, try again")
        return NaN;
    }else{
        return result = parseInt(a) + parseInt(b);
    }
}

console.log(sum2(a,b));
/* ---- C ---- */
var number = prompt();

function validateInteger(number){
    return Number.isInteger(number)
}
console.log(validateInteger(number));
/* ---- D ---- */
function sum3(c,d) {
    if (isNaN(c) || isNaN(d)){
        alert("This is not a number, try again");
        return NaN;
    }else if (validateInteger(c)!== true){
        alert(c + "This is not an Integer number, try again");
        roundC = Math.round(c);
        return roundC
    }else if (validateInteger(d)!== true){
        alert(d + "This is not an Integer number, try again");
        roundD = Math.round(d);
        return roundD
    }else{
        return c + d
    }
}
console.log(sum3('2df',23));
console.log(sum3(2.9,10));
console.log(sum3(10,10.5));
console.log(sum3(10,20));
/* ---- E ---- */
function validateComplete(e,f){
    if (isNaN(e) || isNaN(f)){
        alert("This is not a number, try again");
        return NaN;
    }else if (validateInteger(e)!== true){
        alert(e + "This is not an Integer number, try again");
        roundNumberE = Math.round(e);
        return roundNumberE
    }else if (validateInteger(f)!== true){
        alert(f + "This is not an Integer number, try again");
        roundNumberF = Math.round(f);
        return roundNumberF
    }else{
        return e + f
    }
}

function sum4(e,f){
    return validateComplete(e,f);
}
console.log(sum4(3,'qwert'));