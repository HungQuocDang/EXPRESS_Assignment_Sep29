const express = require('express');
const html_Routes = require('./routes/html_routes')
const notes_Routes = require('./routes/notes_routes')
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_Routes)
app.use(notes_Routes)



//GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))

// GET Route for notes page
  );app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});