const path = require('path')
const fs =require('fs')
const app = require('express').Router()
const uuid = require('../helpers/uuid')




// GET  should return the index.html file.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
  });


// GET /notes should return the notes.html file.
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
  });



  
module.exports = app;