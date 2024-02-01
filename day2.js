document.body.style.backgroundColor = 'red'
let button1 = document.querySelector('.button-1')
let button2 = document.querySelector('.button-2')
let initialBackground = document.body.style.background

button1.style.backgroundColor = 'green'
button2.style.backgroundColor = 'yellow'

button1.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button1.style.backgroundColor
})

button2.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button2.style.backgroundColor
})

document.body.addEventListener('click', ()=>{
    if(document.body.style.backgroundColor !== initialBackground){
        document.body.style.backgroundColor = initialBackground
    }
})
