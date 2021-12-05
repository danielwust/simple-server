import express from 'express';
import dotenv from "dotenv";

const port = process.env.PORT || 3000;
const databaseUrl = process.env.CLEARDB_DATABASE_URL || 'None';

dotenv.config({
    path: ".env",
});

const app = express();

app.get('/', function (req, res) {
  res.send(`Database is running!`);
})

app.listen(port, () => {
  console.log(`API Rodando na porta: (${port})..`);
  console.log(`Database is running on: ${databaseUrl}`);
});