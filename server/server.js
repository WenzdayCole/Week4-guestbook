import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.listen(8080, function() {
     console.log(`Server running on PORT 8080`);
});


app.get("/", (req, res) => {
     res.json({ message: "This is the root route. It's ALIVVEE!" });
   });


   import pg from "pg";
   import dotenv from "dotenv";
   dotenv.config();

const dbConnectionString = process.env.DB_CONN_STRING;

  export const db = new pg.Pool({
     connectionString: dbConnectionString
   });

app.get("/form_entries", async (req, res) => {
     const query = await db.query(`SELECT * FROM form_entries`);
     await res.json(query.rows);
});

app.post("/new-data", async (req, res) => {
     const data = req.body.formValues;
     const query = await db.query(
       `INSERT INTO table_name (name, content) VALUES ($1, $2,)`,
       [name, content]);
     await res.json(query.rows)});