var number1 = prompt();
var number2 = prompt();

function sum(number1,number2) {
    if (number1 === NaN|| number2 === NaN){
        alert("This is not a number, try again")
        return NaN;
    }else{
        return result = parseInt(number1) + parseInt(number2);
    }
}

console.log(sum(number1,number2));
