const fetchData = require('../utils/fetchData.js');

let API = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async (url_api)=>{
    for (let index = 0; index < 5; index++) {
        try {
            const data = await fetchData(url_api);
            const character = await fetchData(`${API}${data.results[index].id}`);
            const origin = await fetchData(character.origin.url);
            console.log(data.info.count);
            console.log(character.name);
            console.log(origin.dimension)
        } catch (error) {
            console.error(error)
        }
    }

}

console.log('Before')
anotherFunction(API);
console.log('After')