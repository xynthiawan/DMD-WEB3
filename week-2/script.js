//The hosted JSON should serve as your data source. Do not duplicate that file anywhere on your file system or in your repo.





//List each person on the page including their name, title, email address, phone number, and birthdate. Make it look decent with CSS.
//Everything should validate.
//SORT AND DISPLAY THE DIRECTORY BY LAST NAME

/*


console.log(`this is some codes `);
*/

//Use Javascript Fetch to retrieve the data.

fetch('https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json()) // read the json
.then(response => console.log(JSON.stringify(response)))



//Create a "Person" class in your javascript, which is properly instantiated and multiple times in concert with your request to my JSON file.
class person {
// convert all the read in content into each individual class items
// read in data and manage it vertically
    
} ;
