//The hosted JSON should serve as your data source. Do not duplicate that file anywhere on your file system or in your repo.
//List each person on the page including their name, title, email address, phone number, and birthdate. Make it look decent with CSS.
//Everything should validate.
//SORT AND DISPLAY THE DIRECTORY BY LAST NAME
//Use Javascript Fetch to retrieve the data.
//Create a "Person" class in your javascript, which is properly instantiated and multiple times in concert with your request to my JSON file.

fetch("https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    let { contacts } = data;

    contacts.forEach(contact =>{ 
    // for each objects or each position allow the console return the name to check validity
        console.log (contact.firstname, contact.lastname, contact.phone);
    }); 

    contacts = contacts.map(contact => new Person (
        contact.firstname,
        contact.lastname,
        contact.phone,
        contact.title,
        contact.birthdate,
        contact.email
    ));
    
  displayDirectory(contacts);
  // contacts means the array object name so I want to display it
})
.catch(error => console.error(error));



class Person {
    constructor(firstname, lastname, phone, title, birthdate, email) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.phone = phone;
      this.title = title;
      this.birthdate = birthdate;
      this.email = email;
    }
  }
  
  const displayDirectory = data => {
   // const directory = document.getElementById("directoryBody");
    //data.sort((a, b) => {
      //const nameA = a.name.split(" ")[1];
      //const nameB = b.name.split(" ")[1];
      //return nameA.localeCompare(nameB);
    //});
    data.forEach(contacts => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${contacts.firstname}</td>
        <td>${contacts.lastname}</td>
        <td>${contacts.phone}</td>
        <td>${contacts.title}</td>
        <td>${contacts.birthdate}</td>
        <td>${contacts.email}</td>
      `;
      directory.appendChild(tr);
    });
  };
  

  

//Create a "Person" class in your javascript, which is properly instantiated and multiple times in concert with your request to my JSON file.

//console.log(JSON.parse());wha