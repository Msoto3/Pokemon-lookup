let res = prompt("Please enter the ID number for the pokemon.\nChoose a number from 1-898.\n\nRefresh the page to choose a new Pokemon.");
do{
   res = prompt("Invalid, Please enter the ID number for the pokemon.\nChoose a number from 1-898.\n\nRefresh the page to choose a new Pokemon.");
} while(parseInt(res)<1 || parseInt(res)>898 );

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: res,
};

const {url,type,id} = apiData;
const apiUrl = `${url}${type}/${id}`;

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then((data) => genHtml(data))
    .catch( error => console.error('Error:', error))
const genHtml = (data) =>{
    console.log(data)
    const html = `
        <div class='name'>${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class='details'>
            <span>#${data.id}</span>
        </div>
        <div class='details'>${data.types[0].type.name}</div>
    `;
    const pokDiv = document.querySelector('.pokemon');
    pokDiv.innerHTML = html;

}
