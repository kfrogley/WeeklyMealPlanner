const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let pantryItems = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/pantry', (req, res) => {
  res.json(pantryItems);
});

app.post('/pantry', (req, res) => {
  const item = req.body.item?.trim();
  if (item && !pantryItems.includes(item)) {
    pantryItems.push(item);
  }
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});