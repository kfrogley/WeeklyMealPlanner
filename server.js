const { recognizeImageFromUrl } = require("./recognizeImageUrl.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

let pantryItems = [];

// Load pantry items from file on server start
const fs = require("fs");
const pantryFilePath = path.join(__dirname, "pantryItems.txt");
if (fs.existsSync(pantryFilePath)) {
  pantryItems = fs
    .readFileSync(pantryFilePath, "utf-8")
    .split("\n")
    .filter(Boolean);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

// Route to serve index.html explicitly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/pantry", (req, res) => {
  res.json(pantryItems);
});

app.post("/pantry", (req, res) => {
  const item = req.body.item?.trim();
  if (item && !pantryItems.includes(item)) {
    pantryItems.push(item);
    // Save to file
    const fs = require("fs");
    const filePath = path.join(__dirname, "pantryItems.txt");
    let allItems = [];
    if (fs.existsSync(filePath)) {
      allItems = fs.readFileSync(filePath, "utf-8").split("\n").filter(Boolean);
    }
    if (!allItems.includes(item)) {
      allItems.push(item);
      fs.writeFileSync(filePath, allItems.join("\n"), "utf-8");
    }
  }
  res.redirect("/");
});

// Update pantry item
app.put("/pantry/:item", (req, res) => {
  const oldItem = req.params.item;
  const newName = req.body.newName?.trim();
  console.log("newName", newName);
  console.log("Old item:", oldItem);
  if (!newName) return res.status(400).json({ error: "New name required" });
  const idx = pantryItems.indexOf(oldItem);
  if (idx !== -1 && !pantryItems.includes(newName)) {
    pantryItems[idx] = newName;
    // Update file
    fs.writeFileSync(pantryFilePath, pantryItems.join("\n"), "utf-8");
  }
  res.json(pantryItems);
});

// Delete pantry item
app.delete("/pantry/:item", (req, res) => {
  const item = req.params.item;
  pantryItems = pantryItems.filter((i) => i !== item);
  fs.writeFileSync(pantryFilePath, pantryItems.join("\n"), "utf-8");
  res.json(pantryItems);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post("/api/recognize-image-url", async (req, res) => {
  const { imageUrl } = req.body;
  if (!imageUrl) {
    return res.status(400).json({ error: "Missing imageUrl" });
  }
  try {
    const text = await recognizeImageFromUrl(imageUrl);
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});