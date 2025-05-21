const dotenv = require("dotenv/config");
const { OpenAI } = require("openai");
const fs = require("fs");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function recognizeImageFromUrl(imageUrl) {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4.1-mini", // or "gpt-4o" if available
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Give me a list of contents from this image separated by new line." },
            { type: "image_url", image_url: { url: imageUrl } }
          ]
        }
      ],
      max_tokens: 300
    });
    const content = res.choices[0].message.content;
    fs.writeFileSync("pantryItems.txt", content, "utf8");
    return content;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { recognizeImageFromUrl };