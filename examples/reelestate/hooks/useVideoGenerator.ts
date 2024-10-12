import { useState } from 'react';
import { VideoRequest } from '@models/config';
import { apiClient } from '@lib/apiClient';

interface GenerateVideoResponse {
  id: string;
}

interface VideoStatusResponse {
  status: 'queued' | 'processing' | 'done' | 'failed';
  url?: string;
}

const useVideoGenerator = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleCreate = async (config: VideoRequest) => {
    try {
      setStatus('queued');

      const formData = new FormData();
      config.imageFiles.forEach((file, index) => {
        formData.append(`image${index + 1}`, file);
      });
      formData.append('address', config.address);
      formData.append('bedrooms', config.bedrooms.toString());
      formData.append('bathrooms', config.bathrooms.toString());
      formData.append('cars', config.cars.toString());
      formData.append('suburb', config.suburb);
      formData.append('state', config.state);
      formData.append('postcode', config.postcode);
      formData.append('propertyType', config.propertyType);
      formData.append('price', config.price);
      formData.append('agentName', config.agentName);
      formData.append('agentEmail', config.agentEmail);
      formData.append('agentPhotoFile', config.agentPhotoFile || '');
      formData.append('agencyLogoFile', config.agencyLogoFile || '');
      formData.append('primaryColor', config.primaryColor);
      formData.append('secondaryColor', config.secondaryColor);
      formData.append('style', config.style);
      formData.append('color', config.color);

      const generateResponse = await apiClient<GenerateVideoResponse>(
        'api/create',
        {
          method: 'POST',
          body: formData
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
