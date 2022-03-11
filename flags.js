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
    let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(flag);;

    if (regexFlag != undefined) {
        regexFlag = input1.value
    }
    if (country != undefined) {
        country = input2.value
    }

    console.log(regexFlag)
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


function displayFunction(country) {
    document.getElementById("countFlags").innerHTML = ""
    for (var i = 0; i < country.length; i++) {
        var list = document.createElement("LI");
        var countList = document.createTextNode(country[i]);
        list.appendChild(countList);
        document.getElementById("countFlags").appendChild(list);
        countriesFlags.push(countList)

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