const parentContainer = document.querySelector('.parent-container')

parentContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN') {
        let subContainer = e.target.nextElementSibling
        // 
        subContainer.classList.toggle('hidden')
    }
})
