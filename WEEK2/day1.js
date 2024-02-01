/**
 * @DOM manipulation
 * @ACCESSING
 * Query Selectors
 * document. querySelector
 * 
 * ID Selectors
 * document.getElemetByID
 * 
 * Class Selectors
 * document.getElementByClassNames
 * 
 * @EVENTLISTENERS
 * mouseover
 * mouseout
 */

// let heading = document.querySelector('.heading')
// heading.style.color = "red"

// let clickMeButton = document.querySelector(".click-me-button")
// let input = document.querySelector(".input")

// clickMeButton.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "black"
// })

// input.addEventListener("mouseover", ()=>{
//     body.style = "yellow"
// })
 
let clickMeButton = document.querySelector('.click-me-button')
let paragraph = document.querySelector('.paragraph')
let initailText = paragraph.innerText

clickMeButton.addEventListener('click', ()=>{
    if(paragraph.innerText === initailText){
        paragraph.innerText = 'Hello World'
    } else {
        paragraph.innerText = initailText
    }
})





 








