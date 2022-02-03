// HTTP REQUESTS

// Fetch API

// CREATE - POST
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

function get(URL){

  fetch(URL)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`status: ${response.status}`);
        return;
      }
      response.json()
        .then(data => {
          output.innerHTML = JSON.stringify(data);
        })
    }).catch((err) => {
      console.error(`${err}`);
    });

}

// axios

read = URL => {
  axios.get(URL)
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

create = URL => {
  axios.post(URL, {
    first_name: `Cameron`,
    email : `cguthrie@qa.com`
  })
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

button.onclick = () => read(input.value);