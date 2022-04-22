// Fetch request at API of GitHub
// Fetch API javascript

const userName = 'wellingtonnadson1'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})
.then((response) => {
    console.log(typeof response)
    return response.json()
})
.then((data) => console.log(data.bio))
.catch((err) => console.log(`Ocorreu um erro: ${err}`))