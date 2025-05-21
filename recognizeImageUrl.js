import "dotenv/config";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Recognize text from a remote image URL using the Vision API.
 * @param {string} imageUrl
 * @returns {Promise<string>}
 */
export async function recognizeImageFromUrl(imageUrl) {
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