var url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;

    if (!countryName.length) countryName = 'Poland';

    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}


function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        var liCap = document.createElement('li');
        var liPop = document.createElement('li');
        var liLang = document.createElement('li');
        var flag = document.createElement("img");
        flag.src = item.flag;
        liEl.innerText = ' Country: ' + item.name;
        liCap.innerText = ' Capital City: ' +
            item.capital;
        liPop.innerText = ' Population: ' +
            item.population;
        liLang.innerText = ' Language: ' +
            item.languages[0].name;
        flag.innerHTML = item.flag
        countriesList.appendChild(flag);
        countriesList.appendChild(liEl);
        countriesList.appendChild(liCap);
        countriesList.appendChild(liPop);
        countriesList.appendChild(liLang);
    });
}