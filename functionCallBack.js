function exec(fn, a, b) {
    return fn(a, b)
}

const somar = (n1, n2) => n1 + n2;

const subtrair = (x, y) => x - y;

console.log(exec(somar, 56, 38));
console.log(exec(subtrair, 182, 27));


// Use of callback at pratic
// Asyncrono use of callbacks
const fs = require('fs'); // File System
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

// const data = (err, data) => console.log(data.toString()); 
// If I don't use the parameter, I can omit it. 
console.log('Iniciando...');
const data = (_, data) => console.log(data.toString());
fs.readFile(caminho, data);
console.log('End...');

// Syncrono use of callbacks

console.log('Sart Sync...')
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('End Sync...');
