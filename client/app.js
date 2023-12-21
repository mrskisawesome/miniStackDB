/*const form = document.getElementById("jokeForm");
//locates the jokeContainer DOM
const jokeContainer = document.getElementById("jokeContainer");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  //get the joke we've written
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  //console.log(formValues);
  //send the joke to the server
  const response = await fetch("http://localhost:8080/jokes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const json = await response.json;
  //create and display the new joke on the page
  const h3 = document.createElement("h3");
  //do the same for a p
  const p = document.createElement("p");

  //insert the content into the placeholders
  h3.textContent = joke.setup;
  p.textContent = joke.punchline;

  //add the h3 and textContent to the Joke container so it can be seen on the page
  jokeContainer.appendChild(h3);
  jokeContainer.appendChild(p);
  //clear the form
  form.requestFullscreen();
  //check on the json

  console.log(json);
});
async function getJokes() {
  //get the jokes from our Database via our API
  const response = await fetch("http://localhost:8080/jokes");
  const jokes = await response.json();

  // loop through the jokes and render them on the page
  jokes.forEach(function (joke) {
    //create an h3 in the index page
    const h3 = document.createElement("h3");
    //do the same for a p
    const p = document.createElement("p");

    //insert the content into the placeholders
    h3.textContent = json.setup;
    p.textContent = json.punchline;

    //add the h3 and textContent to the Joke container so it can be seen on the page
    jokeContainer.appendChild(h3);
    jokeContainer.appendChild(p);
  });
}
//initial load of the jokes in the db
getJokes();*/
const form = document.getElementById("jokeForm");
const jokeContainer = document.getElementById("jokeContainer"); // Obtain jokeContainer DOM element upfront

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const myDiv = document.getElementById("jokeContainer");
  myDiv.innerHTML = "";
  // Get the joke from the form
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  // Send the joke to the server
  const response = await fetch("http://localhost:8080/jokes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const json = await response.json();

  // Create and display the new joke on the page
  getJokes();
  // Clear the form for the next joke
  form.reset();
});

// Initial load of jokes

async function getJokes() {
  // Fetch jokes from the server
  const response = await fetch("http://localhost:8080/jokes");
  const jokes = await response.json();

  // Render the fetched jokes
  jokes.forEach(function (joke) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.textContent = joke.setup;
    p.textContent = joke.punchline;
    jokeContainer.appendChild(h3);
    jokeContainer.appendChild(p);
  });
}
getJokes();
