// const form = document.querySelector('.search-form')
// const input = document.querySelector('.search-input')
// const container = document.querySelector('.container')
// let userInput = 'Gurdian of the Galaxy Vol. 2'

form.addEventListener('submit',(e)=>{
    container.innerHTML = ''
    e.preventDefault()
    userInput = input.value
    if(userInput !==''){
        fetchdata()
    }
})


const API_KEY ='231628bb'
const base_url = ` http://www.omdbapi.com/?apikey=${API_KEY}`




const fetchdata = async ()=>{
    const response = await fetch (`${base_url}s=batman`)
    const data = await response.json()
    console.log(data)
}

fetchdata()