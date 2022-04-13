const carrinho = [
    {nome: 'Caneta', qnt: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qnt: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qnt: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qnt: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qnt: 1, preco: 19.20, fragil: true},
]

// 1. Frágil: True
const itemFrageis = carrinho
.filter((product) => product.fragil === true)
// I only take the name of the products
.map((item) => item.nome)
console.log(`Item frágeis: ${itemFrageis}`)


// 2. Qnt * Preço = Total
const precoTotalProduct = carrinho
.filter((product) => product.fragil)
.map((item) => `${item.nome}: $ ${item.qnt * item.preco}`)
console.log(`${precoTotalProduct}`)

const totalCarrinho = carrinho
.filter((product) => product.fragil)
.map((item) => item.qnt * item.preco)
.reduce((acc, el) => acc + el)
console.log('Valor total do Carrinho: $' + totalCarrinho)


// 3. Médias Totais
const media = (acc, el, i, array) => {
    if (i === array.length - 1){
        return (acc + el)/array.length
    } else{
        return acc + el
    }
}

const mediaTotal = carrinho
.filter((product) => product.fragil)
.map((item) => item.preco * item.qnt).reduce(media)
console.log('Média de Valores: ' + mediaTotal)

