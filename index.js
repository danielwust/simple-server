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

app.get("/Command", function (req, res) {
  res.send({
    "cron_string": "1 * * * * *",
    "destination": "#input",
    "source": "#output",
    "flags": "a",
    "id": 1,
    "params": "any",
    "execute": true
  });
});

app.listen(port, () => {
  console.log(`API Rodando na porta: (${port})..`);
  console.log(`Database is running on: ${databaseUrl}`);
});