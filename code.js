// create modal

function createModal(elem) {
    console.log(`https://reqres.in/api/users/${elem.id}`);
    fetch(`https://reqres.in/api/users/${elem.id}`)
    .then((response) => response.json())
    .then((data) => {

                data = data['data']
                console.log(data);

                let personData = document.createElement('div');
                personData.classList.add("person-data");

                personData.innerHTML += 'email: ' + data['email'] + ' ';
                personData.innerHTML += 'last name: ' + data['last_name'] + ' ';

                let avatar = document.createElement('img');
                avatar.setAttribute("src", data['avatar']);
                personData.append(avatar);

                elem.append(personData);
    })
}

// create person

function createPerson(data) {
    for (let people of data) {

        let person = document.createElement('div');
        person.setAttribute("id", people['id']);
        person.classList.add("person");
        person.innerHTML += people['first_name'];
        
        person.addEventListener("click", function() {
            createModal(person);
        })

        document.getElementById("container").append(person);
    }
}

// get data

fetch('https://reqres.in/api/users/')
  .then((response) => response.json())
  .then((data) => createPerson(data['data']));
