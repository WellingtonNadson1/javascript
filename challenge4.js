const fs = require('fs')
const path = require('path')


function lerDoc(caminho){
    return new Promise((resolve, reject) => {
        if (caminho){
        fs.readFile(caminho, (_, content) => {
            resolve(content)
        }
            )
        } else { 
            reject("Deu ruim")
        }
    })
}
        
        

const caminho = path.join(__dirname, 'dados.txt')

lerDoc(caminho).then((content) => console.log(content.toString()))
.catch((err) => console.log(`Ocorreu um erro: ${err}`))