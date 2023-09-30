const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");


router.get('/api/notes', async (req, res) => {
  const dbJsonfile = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJsonfile);
});


router.post('/api/notes', (req, res) => {
  const dbJsonfile = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newDatafile = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJsonfile.push(newDatafile);
  fs.writeFileSync("db/db.json",JSON.stringify(dbJsonfile));
  res.json(dbJsonfile);
});


router.delete('/api/notes/:id', (req, res) => {
  let datafile = fs.readFileSync("db/db.json", "utf8");
  const dataJSON =  JSON.parse(datafile);
  const newNotes = dataJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
  res.json("Note deleted.");
});

module.exports = router; 