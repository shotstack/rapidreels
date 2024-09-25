import {
  ShotstackRenderResponse,
  ShotstackStatusResponse
} from '@models/shotstack';
import { VideoConfig } from '@models/config';
import {
  generateVoiceover,
  generateImagePrompts
} from '@services/openAIService';

import { template } from '@constants/template';

const SHOTSTACK_API_URL = 'https://api.shotstack.io/edit/v1';
const SHOTSTACK_API_KEY = process.env.SHOTSTACK_API_KEY || '';

export const generateVideo = async (
  configData: VideoConfig
): Promise<string> => {
  console.info('Start video generation ...');

  const voiceover = await generateVoiceover(configData.content);
  const imagePrompts = await generateImagePrompts(voiceover.text);

  const merge = [
    { find: 'headline', replace: imagePrompts.headline },
    { find: 'voice', replace: configData.voice },
    ...imagePrompts.prompts.map((prompt: string, index: number) => ({
      find: `image-prompt-${index + 1}`,
      replace: prompt
    })),
    { find: 'voiceover', replace: voiceover.text }
  ];

  const payload = {
    ...template,
    merge: merge
  };

  const response = await fetch(`${SHOTSTACK_API_URL}/render`, {
    method: 'POST',
    headers: {
      'x-api-key': SHOTSTACK_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to generate video');
  }

  const data: ShotstackRenderResponse = await response.json();

  console.info(`Video generated successfully: ${data.response.id}`);

  return data.response.id;
};

export const pollVideoStatus = async (
  id: string
): Promise<{ status: string; url?: string }> => {
  const VIDEO_STATUS_URL = `${SHOTSTACK_API_URL}/render/${id}`;

  const response = await fetch(VIDEO_STATUS_URL, {
    method: 'GET',
    headers: {
      'x-api-key': SHOTSTACK_API_KEY,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch video status');
  }

  const data: ShotstackStatusResponse = await response.json();

  const { status, url } = data.response;
  return { status, url };
};
