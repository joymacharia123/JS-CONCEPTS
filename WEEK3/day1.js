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
//         <div class="editor">
//         <div class="image">
//             <img src = "${character.image}"/>
//             </div>
//             <div class="charDetails">
//             <p class = "nameChar">${character.name}</p>
//             <p>${character.status} - ${character.species}</p>

//             <p class = "subDetails">Last Known Location :</p>
//             <p>${character.location.name}</p>

//             <p class = "subDetails">First seen in:</p>
//             <p>${character.origin.name}</p>
//             </div>
//         </div>
//         `
//         container.appendChild(card)
//     })
// }

// fetchdata()


// const fetchdata = async ()=>{
//     const response = await fetch ('https://api.walobwa.xyz/store/products')
//     const data = await response.json()
//     const info = (data.products)


//     console.log(info)
// }

// fetchdata()