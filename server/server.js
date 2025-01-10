import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.listen(8080, function() {
     console.log(`Server running on PORT 8080`);
});