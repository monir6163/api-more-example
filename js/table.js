const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountry()

// Display All Country
let serial = 0;
const displayCountry = countries => {
    const tableBody = document.querySelector('tbody')
    countries.forEach(country => {
        serial++
        const tableRow = document.createElement('tr')
        // Display Serial Number
        DisplayTableData(serial, tableRow)
        // Display Country Name
        DisplayTableData(country.name, tableRow)
        // Display Country Capital
        DisplayTableData(country.capital, tableRow)
        //Display Country Calling Codes
        DisplayTableData(country.callingCodes[0], tableRow)
        // More details button
        const button = document.createElement('td')
        button.setAttribute('onclick', `loadDetails("${country.name}")`)
        button.setAttribute('data-bs-toggle','modal')
        button.setAttribute('data-bs-target','#exampleModal')
        button.innerText = 'More Details'
        button.classList.add('text-decoration-underline')
        //Append to display on table
        tableRow.appendChild(button)
        tableBody.appendChild(tableRow)
    })
}


// Function to display Table data
const  DisplayTableData = (which,where) =>{
        const tableDataName = document.createElement('td')
        tableDataName.innerText = which
        where.appendChild(tableDataName)
}

//Load Country Details
const loadDetails = (country) =>{
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayDetails(data[0]))
}

// Display Country Details On Modal
const displayDetails = data => {
    console.log(data)
    const modalBody = document.getElementById('modal')
    modalBody.innerHTML = `
        <h5>Country Name: ${data.name}</h5>
        <h5>Capital Of this country: ${data.capital}</h5>
        <h5>Native Name: ${data.nativeName}</h5>
        <h5>Language: ${data.languages[0].name}</h5>
        <h5>region: ${data.region}</h5>
        <img style = ' width:100%' src=${data.flag}>
    `
}