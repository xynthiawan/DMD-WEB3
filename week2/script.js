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
    const directory = document.getElementById("directoryBody");
    data.sort((a, b) => {
      const nameA = a.lastname;
      const nameB = b.lastname;
      return nameA.localeCompare(nameB);
    });
    data.forEach(contact => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${contact.firstname}</td>
        <td>${contact.lastname}</td>
        <td>${contact.phone}</td>
        <td>${contact.title}</td>
        <td>${contact.birthdate}</td>
        <td>${contact.email}</td>
      `;
      directory.appendChild(tr);
    });
  };
  
  fetch("https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json")
    .then(response => response.json())
    .then(data => {
      const contacts = data.map(contact => new Person(
        contact.firstname,
        contact.lastname,
        contact.phone,
        contact.title,
        contact.birthdate,
        contact.email
      ));
      displayDirectory(contacts);
    })
    .catch(error => console.error(error));
  