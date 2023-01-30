const uuid = require('../helpers/uuid');
const express = require('express');
const path = require('path');
const fs = require('fs')
const db = require('./db')


//app port and app object
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// GET /notes should return the notes.html file.
app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
  });


// GET * should return the index.html file.
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });



// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    fs.readFile("db.json", (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });






// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

  





//server listen
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
