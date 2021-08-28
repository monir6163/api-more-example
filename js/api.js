// kanye api fetch data 
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(res => displayQuotes(res))
}
const displayQuotes = res => {
    const blockquotes = document.getElementById('quotes');
    blockquotes.innerText = res.quote;
}
// random users api called 
const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
const displayBuddies = data => {
    const buddies = data.results
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} Age: ${buddy.dob.age} Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}
// Countries name api called 
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
let serial = 0;
const displayCountries = data => {
    const countriesElement = document.getElementById('countries');
    for(const country of data){
        serial++;
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `<span>${serial}</span><h4>Name: ${country.name}</h4> <p>Capital: ${country.capital}</p> <span>Alpha2Code: ${country.alpha2Code}</span> <button onclick = "loadDetails('${country.name}')">Details</button>`;
        countriesElement.appendChild(div);
    }
}
const loadDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    const divDetails = document.getElementById('details');
    divDetails.innerHTML = `<p>Name: ${country.name}</p> <img width = 50 src = "${country.flag}">`
}