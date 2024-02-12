// const input = document.querySelector('.search-input')
const container = document.querySelector('.container')





const url = 'https://gym-workout1.p.rapidapi.com/food';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92311f6163msh1303da3d72b52d6p1ebf02jsnac766245dc8b',
		'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
	}
};

const fetchdata = async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        result.forEach(food => {
            const card = document.createElement('div')
            card.classList.add('card')
        card.innerHTML = `
        <h1>${food.id}.${food.name}</h1>
        <div>Calories:${food.Calories}</div>
        <div>Protein:${food.Protein}</div>
        <div>Fat:${food.Protein}</div>
        <div>Carbohydrates:${food.Carbonhydrates}</div>
        <div>Weight:${food.Weight}</div>
        `
        container.appendChild(card)
        })
    } catch (error) {
        console.error(error);
    }
    // try {
        
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     console.log(result)

    //     const card = document.createElement('div')
    //     card.classList.add('card')
    //     card.innerHTML = `
    //     <h1>${result.name}</h1>
    //     `
    //     container.appendChild(card)
    //     }
    // } catch (error) {
    //     console.error(error);
}

fetchdata()