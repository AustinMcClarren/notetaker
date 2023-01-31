const path = require('path');
const fs =require('fs')
const app = require('express').Router()
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');




// /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });




  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  app.post('/notes', (req,res)=> {
    if(req.body){
      const newNote = {
        newNote: (req.body),
      };
      console.log(req.body)
      
      readAndAppend(newNote, './db/db.json')
      res.json(`New note was added!`);
    } else{
      res.error('error if note isnt added')
    }
  });

//stringify and parse this?
module.exports = app;