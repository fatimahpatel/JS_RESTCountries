console.log("Hi!");

const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const jsonData = await response.json(); //takes the response and puts it into JSON format
    const accessSection = document.querySelector("section");
    console.log(jsonData);
    jsonData.forEach(country => {
        const textContainer = document.createElement("p");
        textContainer.textContent = country.name.common;
        accessSection.appendChild(textContainer);
    })
    // document.querySelector("body").appendChild(textContainer);
}
getCountryByName("america");


//  You'll need to access specific properties within the returned object, such as name. 
//need to do await fetch for country name 
//convert this data to json
//need to access the section
//insert the information into the section? - might need to use div? 



//This will also involve you creating a variable associated with the section 
//created earlier and making use of the createElement() and .append() methods


