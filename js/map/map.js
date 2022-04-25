const array = [1, 2, 3, 4, 5, 9];

const array2 = [
    {nome: 'Ester', idade: 5},
    {nome: 'Wellington', idade: 32}
]

const result = array.map((el) => el * 2);

const result2 = array2
.map((el) => (el.idade > 18) ? `${el.nome} tem ${el.idade} anos de idade e é Maior de idade` : `${el.nome} tem ${el.idade} anos de idade e é Menor de idade`);

console.log(result);
console.log(result2.join(', '));