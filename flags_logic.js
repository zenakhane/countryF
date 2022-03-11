const countriesAndFlags = () => {
    let countryDisplay = [];



    //remember the input field video before the demo and local storage
    //regex function


    //function for displaying country and flag
    const countryDisplayFlags = countF => {
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
    const setFlagAndCountry = countryFlags => {
        countryFlags = countryFlags;
        if (!countryDisplay.includes(countryFlags)) {
            countryDisplay++;
            // countryDisplay.push(countryFlags);
            return true
        }
    }


    return {
        countryDisplayFlags,
        setFlagAndCountry,
    }
}