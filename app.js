console.log("Hi!");

const getCountryByName = (countryName) => {
    const response = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json()) //takes the response and puts it into JSON format
    .then((data) => console.log(data));
}

getCountryByName("uk");


//  You'll need to access specific properties within the returned object, such as name. 
//need to do await fetch for country name 
//convert this data to json
//need to access the section
//insert the information into the section? - might need to use div?



//This will also involve you creating a variable associated with the section 
//created earlier and making use of the createElement() and .append() methods


