console.log("Hi!");

//function for inputting country name and population to p tag

const addCountryNameAndPopulation = (jsonData) =>{
    jsonData.forEach(country => { //looping through each country
        const accessSection = document.querySelector("section"); //selecting the section

        //adding name and population to textContainer
        const textContainer = document.createElement("p");
        textContainer.textContent = country.name.common + " " + country.population;
        accessSection.appendChild(textContainer)});
}

//get country by name
const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const jsonDataForOneCountry = await response.json(); //takes the response and puts it into JSON format
    console.log(jsonDataForOneCountry);
    addCountryNameAndPopulation(jsonDataForOneCountry);
}

// new function to display name and population of all countries
const getAllCountries = async () =>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonDataForAllCountries = await response.json();
    console.log(jsonDataForAllCountries);
    addCountryNameAndPopulation(jsonDataForAllCountries);
}








// getCountryByName("germany");
// getAllCountries();





//  You'll need to access specific properties within the returned object, such as name. 
//need to do await fetch for country name 
//convert this data to json
//need to access the section
//insert the information into the section? - might need to use div? 



//This will also involve you creating a variable associated with the section 
//created earlier and making use of the createElement() and .append() methods


