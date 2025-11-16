import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-career-coach", // Unique app ID
  name: "ai-career-coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
