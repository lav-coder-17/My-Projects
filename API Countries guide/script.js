// Project Created by Malav Shah Ig:- @lav._.coder
const result = document.getElementById('result');
const btn = document.getElementById('search-btn');

btn.addEventListener("click", () => {
    let inpWord = document.getElementById('input-box').value;
    fetch(`https://restcountries.com/v3.1/name/${inpWord}?fullText=true`)
    .then((responce) => responce.json())
    .then((data) => {
        result.innerHTML = 
        `   <div class="con-name">
                <h3>${inpWord}</h3>
            </div>
            <img src="${data[0].flags.svg}">
            <div class="details">
                <p><span>Capital : </span>${data[0].capital[0]}</p>
                <p><span>Continent : </span>${data[0].continents[0]}</p>
                <p><span>Population : </span>${data[0].population}</p>
                <p><span>Languages : </span>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
                <p><span>Currencies : </span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
            </div>
        `;
    })
    .catch( () => {
        result.innerHTML = `<h3 class="error">ERROR : Couldn't Find the Country!</h3>`
    });
});
// Project Created by Malav Shah Ig:- @lav._.coder