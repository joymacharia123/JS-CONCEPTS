// const fetchdata = require('./data.json')

// const displaydata = ()=>{
//     fetchdata.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }

// displaydata()

// const fetchdata = require('./data.json')

// const displaydata = ()=>{
//     const data = fetchdata.location.name
//     console.log(data)
// }

// displaydata()


// const fetchdata = require('./data.json')

// const displaydata = ()=>{
//     const data = fetchdata.products.forEach(()=>{
//         const info = fetchdata.products.variant.prices.amount
//     })
//     console.log(info)
// }

// displaydata()


const API_KEY = '7b7e0f93a1b043e89e661120240802';
let base_url = ' http://api.weatherapi.com/v1'

const form = document.querySelector('.search-form')
const input = document.querySelector('.search-input')
const container = document.querySelector('.container')
let userInput = 'Nairobi'

form.addEventListener('submit',(e)=>{
    container.innerHTML = ''
    e.preventDefault()
    userInput = input.value
    if(userInput !=='')
    fetchdata()
})


const fetchdata = async ()=>{
    const response = await fetch (`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`)
    const data = await response.json()
    console.log(data)

    const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div>
        <img src= "${data.current.condition.icon}"/>
        </div>
        <span>${data.current.condition.text}</span>
        <h2>${data.location.country}</h2>
        <p>${data.location.name}</p>
        <p>${data.location.localtime}</p>
        `

        container.appendChild(card)


}
fetchdata()