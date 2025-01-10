import {db} from "./server.js"

db.query(
    `INSERT INTO form_entries (name, content)
    VALUES ("Ricards", "Oooh, this is a nice app!")`
);