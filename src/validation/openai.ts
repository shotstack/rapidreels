import { z } from 'zod';

export const voiceoverSchema = z.object({
  text: z.string()
});

export const imagePromptSchema = z.object({
  headline: z.string(),
  prompts: z.array(z.string())
});
