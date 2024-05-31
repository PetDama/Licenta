import express from "express";
import OpenAI from "openai";
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const styleDescription =
  "in a cinematic style with balanced lighting and a lighter tone, focusing on the full outfit. Anything created should be set against a black background. For wardrobe pieces, ensure they are displayed on specially arranged supports such as hangers. For people, generate them from head to toe with the full outfit visible, but do not include their faces.";

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const styledPrompt = `${prompt}, ${styleDescription}`;

    const image = await openai.images.generate({ prompt: styledPrompt });

    res.json({ image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
