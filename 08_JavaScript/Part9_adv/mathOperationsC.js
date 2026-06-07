// named export

function add(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

module.exports = {
    add,
    subtraction,
    multiplication
}