var number = prompt();

function validateInteger(number){
    if((number%2) != 0){
        return false
    }else{
        return true
    }
}

console.log(validateInteger(number));