const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let notes = [];
let noteId = 1

app.get('/', (req, res) => {
  res.send("hello")
})

app.post('/note', (req, res) => { 
  notes.push({ id: noteId, color: req.body.color });
  noteId++;
  res.json(notes);
});

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.post('/editNote', (req, res) => {
  const {id, text} = req.body;
  notes.forEach(note => {
    if(note.id === id){
      note.text = text
    }
  })
  return res.json(notes);
});

app.post('/deleteNote', (req, res) => {
  notes = notes.filter((note) => note.id !== req.body.id);  
  res.json(notes)
})

app.listen(3000, () => {
  console.log('server started');
});
