const dotenv = require("dotenv/config");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function recognizeImageFromUrl(imageUrl) {
  try {
    const res = await openai.images.generate({
      model: "vision-1",
      image: imageUrl
    });
    return res.data[0].text;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { recognizeImageFromUrl };