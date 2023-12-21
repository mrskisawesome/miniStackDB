//seed.js
import Database from "better-sqlite3";
const db = new Database("database.db"); //creates the db
//designs the db
db.exec(`
CREATE TABLE IF NOT EXISTS jokes(
setup TEXT,
punchline TEXT)
`);
// Data to insert (an array of arrays containing name and number pairs)
const jokes = [
  ["Why was the sea wet?", "Because the sea weed."],
  ["Why did the chicken go to the other side?", "To see his flatmate."],
  [
    "Why did the server cross the road?",
    "To get to the other side... but it crashed half way and rolled back to its starting point.",
  ],
];
// Add as many name and number pairs as needed
// Prepare the statement for insertion
const stmt = db.prepare(`INSERT INTO jokes(setup, punchline) VALUES (?, ?)`);

// Insert multiple rows using a loop
jokes.forEach((joke) => {
  console.log(joke[0], joke[1]);
  stmt.run(joke[0], joke[1]);
});
