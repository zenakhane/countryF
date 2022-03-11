const countriesFlags = [{
        flag: "🇦🇷",
        country: "Argentina"

    },
    {
        flag: "🇧🇷",
        country: "Brazil"

    },
    {
        flag: "🇨🇱",
        country: "Chile"

    },
    {
        flag: "🇿🇲",
        country: "Zambia"

    },
    {
        flag: "🇺🇬",
        country: "Uganda"

    },
    {
        flag: "🇲🇼",
        country: "Malawi"

    },
    {
        flag: "🇷🇼",
        country: "Rwanda"

    },
    {
        flag: "🇮🇪",
        country: "Ireland"

    },
    {
        flag: "🇨🇭",
        country: "Switzerland"

    }
]
var regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;


const countFlags = document.querySelector(".countFlags");
const button = document.querySelector("input[name='button']:checked");
let input1 = document.querySelector(".myInput");
let input2 = document.querySelector(".myInput2");

flagList = countriesAndFlags();

countriesFlags.sort();


function myFunction() {
    let flag = input1
    let country = input2
    if (flag != undefined) {
        flag = input1.value

    }
    if (country != undefined) {
        country = input2.value
    }
    console.log(flag)
    console.log(country)
}



let countryList = () => '<ul>' + countriesFlags.map(function(list, index) {
    const {
        flag,
        country
    } = list
    return flag + country;
}).join('') + '</ul>';
countFlags.innerHTML = countryList();


// local storage
if (localStorage['flagList']) {
    countF = JSON.parse(localStorage.getItem('flagList'))
}
flagList.setFlagAndCountry()

const countryFlag = () => {
    if (candflags.setFlagAndCountry(countries.value)) {
        localStorage.setItem('flagsList', JSON.stringify(candflags.countryDisplayFlags()))
        countryList(flagList.setFlagAndCountry())
    }
}

// filtering function
const filterCountries = (element, index) => {
    return element.filter(function(el) {
        return element.indexOf(index) !== -1
    })
}

const buttons = () => {
    var btn = document.querySelector("input[name='button']:checked");
    btn.checked = false;
}