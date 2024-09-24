export const storyPrompts = {
  'Scary Story':
    'Generate a 15-second spine-chilling scary story voiceover script that will keep the listener on the edge of their seat. Include eerie settings, suspenseful plot twists, and a terrifying climax.',
  'Bedtime Story':
    'Create a 15-second soothing and gentle bedtime story voiceover script perfect for children. Include calming settings, friendly characters, and a happy ending to help the listener drift off to sleep.',
  Adventure:
    'Write an exciting 15-second adventure story voiceover script filled with daring quests, brave heroes, and unexpected challenges. Include exotic locations, thrilling action scenes, and a satisfying resolution.',
  Comedy:
    'Craft a hilarious 15-second comedy story voiceover script that will make the listener laugh out loud. Include witty dialogue, funny situations, and humorous characters to keep the mood light and entertaining.'
};

export const imagePromptsGenerator = (voiceover: string) =>
  `Using the provided voiceover: "${voiceover}", generate 6 detailed and unique image prompts optimized for the Flux image generation model. For each image prompt:\\n\\n1. Synchronize the content with the corresponding segment of the voiceover to ensure the succession of images matches the story. Break the voiceover down into 5 parts, generating a unique image for each part that clearly articulates the story at that point in time. There needs to be a clear progress in the story arch for each individual image prompt.\\n2. Clearly describe the following elements:\\n   - **Background**: The setting and environment details.\\n   - **Main Subject**: The primary focus of the image, including detailed descriptions of any characters (e.g., sex, hair color, facial features, clothing) to maintain character consistency.\\n   - **Foreground**: Elements present at the front of the image.\\n   - **Style**: The artistic style to be used, ensuring it remains consistent across all images.\\n3. Maintain the same artistic style across the entire image sequence.\\n\\n**Notes:**\\n\\n- Ensure that each image prompt is detailed and aligns perfectly with its corresponding part of the voiceover.\\n- Use vivid and specific language to describe each element, facilitating accurate image generation.\\n- When portraying people, include extensive details to portray the same character consistently across all images.\\n- Image prompts are used independently and all information needs to be included in each image prompt regardless of repetition.`;
