const parentContainer = document.querySelector('.parent')

// const childContainer = document.createElement('div')
// childContainer.classList.add('child')
// childContainer.innerText = 'I am a child'

// parentContainer.appendChild(childContainer)

// console.log(childContainer)

// const innerChild = document.createElement('div')
// innerChild.classList.add('innerChild')
// childContainer.appendChild(innerChild)

parentContainer.innerHTML = `
<div class = 'child'>
<div class = 'innerChild'></div>
</div>`