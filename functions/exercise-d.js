function validate(a) {
    return Number.isInteger(a);
}

function sum(number1,number2) {
    if (isNaN(number1) || isNaN(number2)){
        alert("This is not a number, try again");
        return NaN;
    }else if (validate(number1)!== true){
        alert(number1 + "This is not an Integer number, try again");
        a = Math.floor(number1);
        return a
    }else if (validate(number2)!== true){
        alert(number2 + "This is not an Integer number, try again");
        b = Math.floor(number2);
        return b
    }else{
        return number1 + number2
    }
}
console.log(sum('2df',23))
console.log(sum(2.9,10));
console.log(sum(10,10.5));
console.log(sum(10,20));
