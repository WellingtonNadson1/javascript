// Fetch request at API of GitHub
// Fetch API javascript

const userName = 'wellingtonnadson1'
const url = `https://api.github.com/users/${userName}`

fetch(url, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})
.then((response) => {
    console.log(typeof response)
    return response.json()
})
.then((data) => {
    const $title = document.querySelector('h1')
    $title.insertAdjacentHTML("beforeend", `${data.name}`)
})
.catch((err) => console.log(`Ocorreu um erro: ${err}`))