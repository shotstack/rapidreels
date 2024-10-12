import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';

import { storyPrompts, imagePromptsGenerator } from '@constants/prompts';
import { voiceoverSchema, imagePromptSchema } from '@validation/openai';
import { Voiceover, ImagePrompt } from '@models/openai';

const openai = new OpenAI();

export const generateVoiceover = async (
  content: string
): Promise<Voiceover> => {
  console.info('Start voiceover script generation ...');
  const voiceoverPrompt = storyPrompts[content as keyof typeof storyPrompts];
  const voiceoverCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a voiceover artist. You create voiceover transcripts for videos that are engaging and captivating. The voiceover is meant to be spoken by one narrator. Do not include descriptive meta language explaining the voiceover, just the voiceover itself.'
      },
      { role: 'user', content: voiceoverPrompt }
    ],
    model: 'gpt-4o-mini',
    max_tokens: 500,
    response_format: zodResponseFormat(voiceoverSchema, 'voiceover')
  });
  const voiceover = JSON.parse(
    voiceoverCompletion.choices[0].message.content || '{}'
  );
  return voiceover;
};

export const generateImagePrompts = async (
  voiceover: string
): Promise<ImagePrompt> => {
  console.info('Start image prompts generation ...');
  const imagePrompt = imagePromptsGenerator(voiceover);
  console.log('imagePrompt', imagePrompt);
  const imageCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are an image prompt engineer who produces high quality, detailed, and specific image prompts for AI image generation. You also provide a 3-word headline for the image sequence.'
      },
      { role: 'user', content: imagePrompt }
    ],
    model: 'gpt-4o-mini',
    max_tokens: 5000,
    response_format: zodResponseFormat(imagePromptSchema, 'imagePrompts')
  });
  console.log('imageCompletion', imageCompletion);
  const imagePrompts = JSON.parse(
    imageCompletion.choices[0].message.content || '{}'
  );
  console.log('imagePrompts', imagePrompts);
  return imagePrompts;
};
