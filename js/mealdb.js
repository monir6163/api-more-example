const searchField = document.getElementById('button-search').addEventListener('click' , function(){
    const inputField = document.getElementById('name');
    const searchResult = inputField.value;
    inputField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayReasult(data.meals))
})
const displayReasult = meals => {
    const searchResultId = document.getElementById('search-result');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            </div>
        </div>
        `;
        searchResultId.appendChild(div);
    });
}