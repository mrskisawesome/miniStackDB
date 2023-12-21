import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.json("You are looking at root route. How roude!");
});

//sets up a route on a web server that listens for POST requests to path/jokes
app.get("/jokes", function (request, response) {
  console.log(request.body);
  //retrieves jokes from my database and prepares a SQL query to select all from the table jokes
  const jokes = db.prepare("SELECT * FROM jokes").all();
  //sends a JSON response back to the client which contains the json form of the jokes array
  response.json(jokes);
});

//set up a route to handle POST requests to the /jokes endpoint
app.post("/jokes", function (request, response) {
  console.log(request.body);
  console.log("BEFORE");
  //finds the data from the body which is the setup of the joke
  const setup = request.body.setup;
  //finds the data from the body which is the punchline of the joke
  const punchline = request.body.punchline;
  //prepares a SQL query to insert a new row into the "jokes" table, with ?,? placeholders for the setup and punchline values
  //stored in newJoke
  const newJoke = db
    .prepare(`INSERT INTO jokes (setup, punchline) VALUES (?,?)`)
    .run(setup, punchline);
  console.log("newJoke", newJoke);
  //sends a json response back to the client
  response.json(newJoke);
});

app.listen(8080, function () {
  console.log("Its working");
});
