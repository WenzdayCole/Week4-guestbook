import {db} from "./server.js"

db.query(
    `INSERT INTO form_entries (name, content)
    VALUES ('Ricards', 'Oooh, this is a nice app!')`
);

db.connect()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB"));