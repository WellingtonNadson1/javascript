const carrinho = [
    {nome: 'Caneta', qnt: 10, preco: 7.99},
    {nome: 'Impressora', qnt: 0, preco: 649.50},
    {nome: 'Caderno', qnt: 4, preco: 27.10},
    {nome: 'Lapis', qnt: 3, preco: 5.82},
    {nome: 'Tesoura', qnt: 1, preco: 19.20},
]

const nameProducts = carrinho.map((product) => product.nome);

const totalValue = carrinho.map((product) => `${product.nome} tem um valor total de $ ${product.qnt * product.preco} em estoque`)

console.log(nameProducts, totalValue);

// Created my version of method Array.map
Array.prototype.myMap = function(fn){
    const newArray = []
    for( let i = 0; i < this.length; i++){
        newArray.push(fn(this[i], i, this))
    }
    return newArray
}

const nameProducts2 = carrinho.myMap((product) => product.nome);
console.log(nameProducts2)