const fs =require('fs')
const app = require('express').Router()
const uuid = require('../helpers/uuid');
const {readAndAppend} = require('../helpers/fsUtils'); //from this path i want this to be imported.




// /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const getNotes = JSON.parse(data);
      res.json(getNotes);
    });
  });




  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  app.post('/notes', (req,res)=> {
    if(req.body){
      const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
      };
      console.log(req.body)
      console.log(uuid)
      
      readAndAppend(newNote, './db/db.json')
      res.json(`New note was added!`);
    } else{
      res.error('error if note isnt added')
    }
  });


module.exports = app;


 // const postedNote = JSON.stringify(data);
  // res.json(postedNote);