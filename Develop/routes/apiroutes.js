const path = require('path');
const fs =require('fs')
const router = require('express').Router()




// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });











  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
// router.post('/api/notes', (req,res)=> {
//   let newNote = fs.writeFileSync('/db/db.json')

//  let uuid = uuid()
// });


// module.exports = router