// Creation Promises
const myPromise = new Promise(function(resolve, reject){
    const user = 'wellington'

    user === 'wellington' ? resolve(`Seja Bem-vindo ${user}`) : reject(`Usuário ${user} não Identificado`)
})

// Method then()
myPromise.then(data => console.log(data))

// If occur erro, I use the Method catch()
.catch((err) => console.log(`Aconteceu um erro: ${err}`))