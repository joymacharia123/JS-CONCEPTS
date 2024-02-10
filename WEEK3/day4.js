const form = document.querySelector('.search-form')
const input = document.querySelector('.search-input')
const container = document.querySelector('.container')






const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92311f6163msh1303da3d72b52d6p1ebf02jsnac766245dc8b',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};

try {
    const fetchdata = async ()=>{
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    }

    fetchdata()
} catch (error) {
	console.error(error);
}
