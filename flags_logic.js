function countriesAndFlags() {
    let countryDisplay = [];

    var regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

    //remember the input field video before the demo and local storage
    //regex function


    //function for displaying country and flag
    function countryDisplayFlags(countF) {
        countryFilter = [];
        for (var i = 0; i < countriesDisplay.length; i++) {
            let flag = countriesDisplay[i].trim();
            if (town.startsWith(countF)) {
                countryFilter.push(flag)
            }
        }
        return countryFilter
    }
    //function for adding a country and a flag
    function setFlagAndCountry(countryFlags) {
        countryFlags = countryFlags.toUpperCase();
        if (!countriesDisplay.includes(countryFlags)) {
            countriesDisplay++;
            countriesDisplay.push(countryFlags);
            return true
        }


    }
    return {
        countryDisplayFlags,
        setFlagAndCountry,
    }
}