//The hosted JSON should serve as your data source. Do not duplicate that file anywhere on your file system or in your repo.
//List each person on the page including their name, title, email address, phone number, and birthdate. Make it look decent with CSS.
//Everything should validate.
//SORT AND DISPLAY THE DIRECTORY BY LAST NAME
//Use Javascript Fetch to retrieve the data.
//Create a "Person" class in your javascript, which is properly instantiated and multiple times in concert with your request to my JSON file.

class Person {
    constructor(name, title, email, phone, birthdate) {
      this.name = name;
      this.title = title;
      this.email = email;
      this.phone = phone;
      this.birthdate = birthdate;
    }
  }
  
  const displayDirectory = data => {
    const directory = document.getElementById("directoryBody");
    data.sort((a, b) => {
      const nameA = a.name.split(" ")[1];
      const nameB = b.name.split(" ")[1];
      return nameA.localeCompare(nameB);
    });
    data.forEach(person => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${person.firstname}</td>
        <td>${person.lastname}</td>
        <td>${person.phone}</td>
        <td>${person.title}</td>
        <td>${person.birthdate}</td>
        <td>${person.email}</td>
      `;
      directory.appendChild(tr);
    });
  };
  
  fetch("https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json")
    .then(response => response.json())
    .then(data => {
        const people = Array.isArray(data) ? data.map(person => new Person(
            person.firstname,
            person.lastname,
            person.phone,
            person.title,
            person.birthdate,
            person.email
          )) : [new Person(
            person.firstname,
            person.lastname,
            person.phone,
            person.title,
            person.birthdate,
            person.email
          )];
      displayDirectory(people);
    })
    .catch(error => console.error(error));
  

//Create a "Person" class in your javascript, which is properly instantiated and multiple times in concert with your request to my JSON file.

//console.log(JSON.parse());wha