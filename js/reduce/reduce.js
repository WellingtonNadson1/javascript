const array = [1, 2, 3, 4, 5, 6];

const array2 = [
    {nome: 'Ester', idade: 5},
    {nome: 'Wellington', idade: 32}
]

const sumArray = array.reduce((total, el) => total + el);

const media = (acc, el,  i, array) =>{
    if (i === array.length - 1){
    return (acc + el)/ array.length
}   else {
        return acc + el
    }
}

console.log(`Está é a média do Array ` + array.reduce(media));