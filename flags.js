const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
const countFlags = document.querySelector(".countFlags")
const button = document.querySelector(".button")

countries.sort();

console.log(countries)
console.log(flags)

let countryList = '<ul>' + countries.map(function(list, index) {
    return flags[index] +
        list;
}).join('') + '</ul>';
countFlags.innerHTML = countryList;
console.log(countryList)


// local storage
function countryFlag() {
    if (candflags.setFlagAndCountry(reg.value)) {
        localStorage.setItem('candflags', JSON.stringify(candflags.countryDisplayFlags()))
        displayFunction(candflags.setFlagAndCountry())
    }
}

// filtering function
function filterCountries(element, index) {
    return element.find(function(el) {
        return el.toLowerCase().indexOf(index.toLowerCase()) !== -1
    })
}
console.log(filterCountries(countries, 'z'))


function buttons() {
    var btn = document.querySelector("input[name='button']:checked");
    btn.checked = false;
}
buttons.addEventListener('click', countriesAndFlags)