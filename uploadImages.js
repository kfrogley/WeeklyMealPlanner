const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

/**
 * Upload a single image file to the remote server.
 * @param {string} filePath - Absolute path to the image file.
 */
async function uploadImage(filePath) {
  const form = new FormData();
  form.append('image', fs.createReadStream(filePath));

  try {
    const res = await axios.post('https://example.com/upload', form, {
      headers: form.getHeaders()
    });
    console.log(`✓ Uploaded ${path.basename(filePath)} –`, res.data);
  } catch (err) {
    console.error(`✗ Failed ${path.basename(filePath)} –`, err.message);
  }
}

/**
 * Scan a directory for image files and upload each one.
 * @param {string} dirPath - Path to the directory containing images.
 */
async function uploadImagesFromDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const full = path.join(dirPath, file);
    const stat = fs.statSync(full);
    if (stat.isFile() && /\.(jpe?g|png|gif)$/i.test(file)) {
      await uploadImage(full);
    }
  }
}

// === CONFIGURATION ===
// Folder relative to this script where your images live:
const IMAGES_DIR = path.join(__dirname, 'images');

// Kick things off:
uploadImagesFromDir(IMAGES_DIR);