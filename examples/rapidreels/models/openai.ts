import { z } from 'zod';
import { voiceoverSchema, imagePromptSchema } from '@validation/openai';

export type Voiceover = z.infer<typeof voiceoverSchema>;
export type ImagePrompt = z.infer<typeof imagePromptSchema>;
