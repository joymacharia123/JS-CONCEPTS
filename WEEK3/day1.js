// let container = document.querySelector('.container')
// const fetchdata = async ()=>{
//     const response = await fetch ('https://rickandmortyapi.com/api/character')
//     const data = await response.json()
//     const characters = data.results
//     console.log(data)
 
//     characters.forEach((character)=>{
//         console.log(character.name)
//         const card = document.createElement('div')
//         card.classList.add('card')
//         card.innerHTML = `
//         <div>
//         <img src = "${character.image}"/>
//         <p>${character.name}</p>
//         </div>
//         `
//         container.appendChild(card)
//     })
// }

// fetchdata()