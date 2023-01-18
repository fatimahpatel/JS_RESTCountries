console.log("Hi!");

const getCountryByName = (countryName) => {
    const response = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json()) //takes the response and puts it into JSON format
    console.log(response);
}

getCountryByName("germany");