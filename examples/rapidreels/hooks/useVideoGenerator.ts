import { useState } from 'react';
import { VideoConfig } from '@models/config';
import { apiClient } from '@lib/apiClient';

interface GenerateVideoResponse {
  id: string;
}

interface VideoStatusResponse {
  status: 'queued' | 'processing' | 'done' | 'failed';
  url?: string;
}

const useVideoGenerator = (config: VideoConfig) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleCreate = async () => {
    try {
      setStatus('queued');
      const generateResponse = await apiClient<GenerateVideoResponse>(
        'api/create',
        {
          method: 'POST',
          body: JSON.stringify(config)
        }
      );

      const { id } = generateResponse;

      while (true) {
        const statusResponse = await apiClient<VideoStatusResponse>(
          `api/status/${id}`,
          {
            method: 'GET'
          }
        );

        if (statusResponse.status === 'done') {
          setVideoUrl(statusResponse.url || null);
          setStatus('');
          break;
        } else if (statusResponse.status === 'failed') {
          console.error('Video generation failed', statusResponse);
          setStatus('failed');
          break;
        } else {
          setStatus(statusResponse.status);
        }

        await new Promise(res => setTimeout(res, 3000));
      }
    } catch (error) {
      console.error('Error creating video:', error);
      setStatus('failed');
    }
  };

  return { videoUrl, status, handleCreate };
};

export default useVideoGenerator;
