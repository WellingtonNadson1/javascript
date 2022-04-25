const array = [1, 2, 3, 4, 5, 9];

const array2 = [
    {nome: 'Ester', idade: 5},
    {nome: 'Wellington', idade: 32}
]

const par = (el) => el % 2 === 0;

const numbers = array.filter(par);

console.log(numbers);


const questionHo = array2.filter((eu) => eu.nome === 'Wellington' ?  eu.nome='Sou Eu!' : eu.nome='Quem és?');

console.log(questionHo);