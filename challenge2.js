//Function return other function
function somar(n1){
    return function (n2){
        return function (n3){
            return n1 + n2 + n3
        }
    }
}
const test = somar(3)(4)(5);
const soma = somar(1);
const plus = soma(2);
const resultSoma = plus(3);

console.log(resultSoma, test);


function calcular(n1){
    return function (n2){
        return function (fn){
            return fn(n1, n2)
        }
    }
}

function subtrair (a, b){
    return a - b
}

function adicionar (a, b){
    return a + b
}

function dividir (a, b){
    return a / b
}

function multiplicar (a, b){
    return a * b
}
const r1 = calcular(3)(7)(subtrair);
console.log(r1);



const pot = (base) => (exp) => Math.pow(base, exp);
console.log(pot(2)(5));